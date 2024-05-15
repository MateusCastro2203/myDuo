import {remove, save, storage} from './storage';

export class Device {
  static readonly Storage = {
    save,
    remove,
    data: storage,
  } as const;
}
