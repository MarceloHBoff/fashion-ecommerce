import { action } from 'typesafe-actions';

import { SidebarTypes } from './types';

export const openSearch = (data: boolean) =>
  action(SidebarTypes.OPEN_SEARCH, { data });

export const openBag = (data: boolean) =>
  action(SidebarTypes.OPEN_BAG, { data });
