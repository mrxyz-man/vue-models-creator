import { types as constTypes } from './constants';

export const types = {
  [constTypes.guest]: {
    id: constTypes.guest,
    name: 'Гость',
  },
  [constTypes.person]: {
    id: constTypes.person,
    name: 'Персона',
  },
  [constTypes.admin]: {
    id: constTypes.admin,
    name: 'Админ',
  },
};

export default {
  types,
};
