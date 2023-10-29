import PocketBase, { RecordService } from 'pocketbase';
import { env } from '@/env.mjs';

export type Post = {
  id: string;
  title: string;
  active: boolean;
};

export type User = {
  id: string;
  username: string;
  email: boolean;
  name: string;
  avatar: string;
  created: string;
  updated: string;
};

interface TypedPocketBase extends PocketBase {
  baseModel: User;
  collection(idOrName: string): RecordService;
  collection(idOrName: 'posts'): RecordService<Post>;
  collection(idOrName: 'users'): RecordService<User>;
}

export const pb = new PocketBase(env.NEXT_PUBLIC_PB_URL) as TypedPocketBase;
