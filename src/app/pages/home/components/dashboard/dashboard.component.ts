import { Component, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval, takeWhile, tap, timer } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { MailService } from 'src/app/core/services/mail.service';
import { FullEmailComponent } from './components/full-email/full-email.component';
import { SampleEmailComponent } from './components/sample-email/sample-email.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck, OnDestroy {
  @ViewChild(SampleEmailComponent) sampleEmailComponent!: SampleEmailComponent;
  @ViewChild(FullEmailComponent) fullEmailComponent!: FullEmailComponent;

  public mySubscription: Subscription;
  public showDashboard!: boolean;
  public emailData!: any;
  public mailId!: string;
  public showfullEmail = false;
  public hasNoEmails = false;
  public counter = 15;
  public timer: any;
  constructor(
    private _authService: AuthService,
    private _mailService: MailService,
  ) {

    this.mySubscription = interval(15000).subscribe(() => {
      this.getMails();
      console.log('hello')
    })
    this.timer = timer(1000, 1000)
      .pipe(
        takeWhile(() => this.counter > 0),
        tap(() => this.counter--)
      ).subscribe(() => {
        this.counter;
        this.counter === 0 ? this.counter = 15 : this.counter;
      });
  }

  ngOnInit() {
    this.getMails();
    this.mySubscription;
  }

  ngDoCheck() {
    this.showDashboard = this._authService.checkIfShowDashboard();
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  public getToken(): string {
    return this.mailId = this._authService.getTemporaryEmailId();
  }

  public getMails(): void {
    const mailId = this.getToken();
    const tokenId = this._authService.getToken();
    if (this._authService.getTemporaryEmailId() !== null) {
      this._mailService.getMails(tokenId, mailId).subscribe((res: any) => {
        if (res.data?.session?.mails.length < 1) {
          this.hasNoEmails = true;
          this.sampleEmailComponent.emailData = [];
          return;
        }
        this.sampleEmailComponent.emailData = res.data.session.mails;
      });
    }
  }

  public recieveEmailClicked(event: any) {
    this.emailData = event;
    this.showfullEmail = true;
  }
}
