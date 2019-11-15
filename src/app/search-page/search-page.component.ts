import { Component, OnInit, OnDestroy } from '@angular/core';
import { DealService } from '../deal.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Deal } from '../deal';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  dealsSub: Subscription;
  privateDeals: Deal[];
  error: any;

  constructor(
    public dealService: DealService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.dealsSub = this.dealService
      .getPrivateDeals()
      .subscribe(
        deals => this.privateDeals = deals,
        err => error => this.error = err
      );
  }

  ngOnDestroy() {
    this.dealsSub.unsubscribe();
  }

}
