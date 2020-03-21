import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BalanceSubject } from '../../balance';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';


@Component({
  selector: 'app-some-money',
  templateUrl: './some-money.component.html',
  styleUrls: ['./some-money.component.css']
})
export class SomeMoneyComponent implements OnInit, OnDestroy {
  money = 0;
  subscriptions = new Subscription();

  constructor(private store: Store<State>) {}

  ngOnInit() {
    // this.subscriptions.add(
    //   BalanceSubject.subscribe(balance => {
    //     this.money = balance;
    //   })
    // );
    this.subscriptions.add(
      this.store
        .select(state => state.account)
        .subscribe(account => {
          this.money = account.balance;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
