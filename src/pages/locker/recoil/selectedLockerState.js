import { atom } from 'recoil';

export const selectedLockerState = atom({
  key: 'selectedLockerState',
  default: null,
});

export const selectedLocationState = atom({
  key: 'selectedLocationState',
  default: null,
});
