import { nanoid } from 'nanoid';
import { UserItems } from '../interfaces/usersData.interface';

export const userData: UserItems[] = [
  {
    id: nanoid(),
    userName: 'guest',
    password: 'pwd123',
  },
  {
    id: nanoid(),
    userName: 'user123',
    password: 'pwd123',
  },
];
