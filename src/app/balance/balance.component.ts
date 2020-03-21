import { Component, OnInit, OnDestroy } from '@angular/core';
// import { BalanceSubject } from "../balance";
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { AddAmount, SubstractAmount } from './actions/balance.actions';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit, OnDestroy {
  balance = 0;
  subscriptions = new Subscription();
  constructor(private store: Store<State>) {}

  ngOnInit() {

    // I ncertain cases you can use Behavior subject in order to get data not throgh all the parents
    // this.subscriptions.add(
    //   BalanceSubject.subscribe(balance => {
    //     this.balance = balance;
    //   })
    // );
    this.subscriptions.add(
      this.store
        .select(state => state.account)
        .subscribe(account => {
          this.balance = account.balance;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  add() {
    this.store.dispatch( new AddAmount(10));
    // BalanceSubject.next(BalanceSubject.value + 10);
  }

  subtract() {
    // BalanceSubject.next(BalanceSubject.value - 10);
    this.store.dispatch( new SubstractAmount(10));
  }
}
