import { ref, watch } from 'vue';

import type { Ref } from 'vue';
import type { Announcement, AnnouncementSavedData } from '@/models';

/**
 * Результат работы композабла управления анонсами.
 */
type AnnouncementComposable = {
  announcements: Ref<Announcement[]>;
  resetAnnouncements: () => void;
};

/**
 * Композабл для получения соответствующего маршруту списка анонсов.
 *
 * @param storageKey Ключ для хранилища.
 * @param originAnnouncements Анонсы.
 * @returns AnnouncementComposable.
 */
export function useAnnouncements(
  storageKey: Ref<string>,
  originAnnouncements: Ref<Announcement[]>,
): AnnouncementComposable {
  /**
   * Копия сохранённой конфигурации анонсов.
   *
   * @private
   */
  const _announcementSavedData = ref<AnnouncementSavedData[]>(_getDataFromStorage());

  /**
   * Анонсы.
   */
  const announcements = ref<Announcement[]>(
    _getMergedAnnouncements(originAnnouncements.value, _announcementSavedData.value),
  );

  watch(
    announcements,
    () => {
      _setDataIntoStorage(announcements.value);
    },
    { deep: true },
  );

  /**
   * Сбросить конфигурацию колонок
   */
  function resetAnnouncements(): void {
    announcements.value = originAnnouncements.value;
  }

  /**
   * Получить объединённую конфигурацию анонсов.
   *
   * @private
   * @param announcements Анонсы.
   * @param savedData Сохранённые данные анонсов.
   * @returns Объединённая конфигурация анонсов.
   */
  function _getMergedAnnouncements(
    announcements: Announcement[],
    savedData: AnnouncementSavedData[],
  ): Announcement[] {
    return announcements.map((announcement) => {
      const state = savedData.find((state) => state.id === announcement.id);

      return {
        ...announcement,
        enabled: state?.enabled ?? announcement?.enabled ?? true,
      };
    });
  }

  /**
   * Сделать копию сохранений конфигурации анонсов.
   *
   * @private
   * @param announcements Конфигурация анонсов.
   * @returns Сохранение конфигурации анонсов.
   */
  function _createAnnouncementSavedData(announcements: Announcement[]): AnnouncementSavedData[] {
    return announcements.map((announcement) => ({
      id: announcement.id,
      enabled: announcement?.enabled ?? true,
    }));
  }

  /**
   * Десериализовать DTO AnnouncementSavedData.
   *
   * @private
   * @param dto DTO сохранённой конфигурации анонсов.
   * @returns Сохранённая конфигурация анонсов.
   */
  function _deserialize(dto: string): AnnouncementSavedData[] {
    const raw = JSON.parse(dto);

    if (!Array.isArray(raw)) {
      return [];
    }

    const filtered = raw.filter((entity) => {
      const { id, enabled } = entity;

      if (!(id && typeof id === 'string')) {
        return false;
      }

      if (!(typeof enabled === 'boolean')) {
        return false;
      }

      return true;
    });

    return filtered.map((entity) => ({
      id: entity.id,
      enabled: entity.enabled,
    }));
  }

  /**
   * Сохранить данные в localStorage
   *
   * @private
   * @param announcements Данные, которые надо поместить в localStorage.
   */
  function _setDataIntoStorage(announcements: Announcement[]): void {
    const save = _createAnnouncementSavedData(announcements);
    const dto = JSON.stringify(save);

    window.localStorage.setItem(storageKey.value, dto);
  }

  /**
   * Извлечь сохранённое состояние анонсов из localStorage.
   *
   * @private
   * @returns Сохранённое состояние анонсов.
   */
  function _getDataFromStorage(): AnnouncementSavedData[] {
    const dto = window.localStorage.getItem(storageKey.value);

    if (!dto) {
      return [];
    }

    return _deserialize(dto);
  }

  return {
    announcements,
    resetAnnouncements,
  };
}

export default useAnnouncements;