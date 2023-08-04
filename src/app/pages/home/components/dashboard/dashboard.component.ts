import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { MailService } from 'src/app/core/services/mail.service';
import { SampleEmailComponent } from './components/sample-email/sample-email.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck {
  @ViewChild(SampleEmailComponent) sampleEmailComponent!: SampleEmailComponent;
  public showDashboard!: boolean;
  public mailId!: string;
  public timer = timer(1500);
  constructor(
    private _authService: AuthService,
    private _mailService: MailService,
  ) {
  }

  ngOnInit() {
    this.getMails();
  }

  ngDoCheck() {
    this.showDashboard = this._authService.checkIfShowDashboard();
    setTimeout(() => {
      this.getMails();
    }, 20000)
  }

  public getToken(): string {
    return this.mailId = this._authService.getTemporaryEmailId();
  }

  public getMails(): void {
    const mailId = this.getToken();
    const tokenId = this._authService.getToken();
    if (this._authService.getTemporaryEmailId() !== null) {
      this._mailService.getMails(tokenId, mailId).subscribe((res: any) => {
        if (res.data.session.mails.length < 1) {
          this.sampleEmailComponent.isEmpty = true;
          return;
        }
        this.sampleEmailComponent.isEmpty = false;
        this.sampleEmailComponent.emailData = res.data.session.mails;
        console.log('this.sampleEmailComponent.emailData = ', res.data.session.mails);
        console.log('emails recebidos', res);
      });
    }
  }


}
