/**
 * Action types
 */
export enum SidebarTypes {
  OPEN_SEARCH = '@sidebar/OPEN_SEARCH',
  OPEN_BAG = '@sidebar/OPEN_BAG',
}

/**
 * Data types
 */
export interface ISidebar {
  openSearch: boolean;
  openBag: boolean;
}

/**
 * State type
 */
export interface ISidebarState {
  readonly data: ISidebar;
}
