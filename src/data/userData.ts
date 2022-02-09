import { nanoid } from 'nanoid';
import { UserItems } from '../interfaces/usersData.interface';

export const userData: UserItems[] = [
  {
    id: nanoid(),
    userName: 'Erik',
    password: 'pwd123',
  },
  {
    id: nanoid(),
    userName: 'Benny',
    password: 'pwd123',
  },
];
