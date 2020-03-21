import { Action } from '@ngrx/store';

export enum BalanceActions {
  ADD_AMOUNT = '[Balance] Add Amount',
  SUBSTRACT_AMOUNT = '[Balance] Substract Amount',
}

export class AddAmount implements Action {
  readonly type = BalanceActions.ADD_AMOUNT;
  constructor(public payload: number) {}
}

export class SubstractAmount implements Action {
  readonly type = BalanceActions.SUBSTRACT_AMOUNT;
  constructor(public payload: number) {}
}
export type BalanceActionsTypes =
  | AddAmount
  | SubstractAmount;

