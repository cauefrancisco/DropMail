import { Clipboard } from '@angular/cdk/clipboard';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { MailService } from 'src/app/core/services/mail.service';


@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.css']
})
export class NewEmailComponent implements OnInit {
  @Output() clear = new EventEmitter<any>
  public form: FormGroup;
  public tokenId!: string;
  public mailId!: string;
  public copyTextTooltip: string = 'Copy';
  public showDashboard = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _clipboard: Clipboard,
    private _mailService: MailService,
    private _authService: AuthService,
  ) {
    this.form = this._formBuilder.group({
      email: ['', { disabled: true }]
    })
  }

  public get F_email(): AbstractControl { return this.form.get('email') as AbstractControl }

  ngOnInit() {
    console.log('makeId', this._authService.generateTokenId(8));
    this.tokenId = this._authService.generateTokenId(12);
    this.hasGeneratedEmail();
  }

  public hasGeneratedEmail(): any {
    const localEmailData = this._authService.getTemporaryEmail();
    if (localEmailData !== null) {
      this.form.reset();
    }
    this.F_email.setValue(this._authService.getTemporaryEmail())

  }


  public createMail(): void {
    this._mailService.createDropMail(this.tokenId).subscribe((res: any) => {
      console.log(res);
      const emailGenerated = res.data.introduceSession.addresses[0].address;
      this.mailId = res.data.introduceSession.id;
      this.F_email.setValue(emailGenerated);
      this._authService.setId(this.mailId);
      this._authService.setTemporaryEmail(emailGenerated);
      this._authService.setToken(this.tokenId);
      this.copyTextTooltip = 'Copy';
      this._authService.showDashboard = true;
    })
  }

  public clearInput() {
    this._authService.clearStorage();
    this.form.reset();
    this._authService.showDashboard = false;
    this.clear.emit();
  }

  public copyEmail() {
    this._clipboard.copy(this.F_email.value);
    this.copyTextTooltip = 'Copied';
  }

}
