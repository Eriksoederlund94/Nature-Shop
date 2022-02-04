import { nanoid } from 'nanoid';
import { UserItems } from '../interfaces/usersData.interface';

export const userData: UserItems[] = [
  {
    id: nanoid(),
    userName: 'guest',
    password: 'pwd123',
  },
];
