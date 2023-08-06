import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewEmailComponent } from './components/new-email/new-email.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(NewEmailComponent) newEmailComponent!: NewEmailComponent;
  @ViewChild(DashboardComponent) dashboardComponent!: DashboardComponent;

  public tokenId!: string;
  public mailId!: string;
  public title: string = '';
  public mySubscription!: Subscription;

  constructor(
  ) { }

  ngOnInit() {
  }

  public clear(): void {
    this.dashboardComponent.emailData = [];
    this.dashboardComponent.showDashboard = false;
    this.dashboardComponent.mySubscription.unsubscribe();
  }

  public startToGetMails() {
    this.dashboardComponent.getMails();
    this.dashboardComponent.showDashboard = true;
  }

}
