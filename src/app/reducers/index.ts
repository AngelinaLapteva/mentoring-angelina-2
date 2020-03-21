import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  Action
} from "@ngrx/store";
import { BalanceActions, BalanceActionsTypes } from '../balance/actions/balance.actions';
import { environment } from "../../environments/environment";

export interface AccountState  {
  balance: number;
  investments: number;
}
export interface State {
  account: AccountState;
}

const initialAccount = {
  balance: 0,
  investments: 0
}

//  action: BalanceActionsTypes | InvestmentsACtionTypes would listen to actions from lets say investments component
const accountReducer = (state = initialAccount, action: BalanceActionsTypes): AccountState => {
  switch (action.type) {
    case (BalanceActions.ADD_AMOUNT):
      return {
        ...state,
      balance: state.balance + action.payload
      };
    case (BalanceActions.SUBSTRACT_AMOUNT):
      return {
        ...state,
        balance: state.balance - action.payload
      }
    default:
    return state;
  }
};

export const reducers: ActionReducerMap<State> = {
  account: accountReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
