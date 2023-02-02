import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root',
})
export class TrainerSessionStorageService {
  private _trainer?: Trainer;
  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.sessionStorageSave<Trainer>(StorageKeys.trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() {
    this._trainer = StorageUtil.sessionStorageRead<Trainer>(
      StorageKeys.trainer
    );
  }
}
