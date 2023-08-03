import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { MailService } from 'src/app/core/services/mail.service';


@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.css']
})
export class NewEmailComponent implements OnInit {
  public form: FormGroup;
  public tokenId!: string;
  public mailId!: string;
  public copyTextTooltip: string = 'Copy';

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
    console.log('makeId', this.generateTokenId(8));
    this.tokenId = this.generateTokenId(12);
    this.hasGeneratedEmail();
  }

  public hasGeneratedEmail(): any {
    const localEmailData = this._authService.getTemporaryEmail();
    if (localEmailData !== null) {
      this.form.reset();
    }
    this.F_email.setValue(this._authService.getTemporaryEmail())

  }

  public generateTokenId(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  public createMail(): void {
    this._mailService.createDropMail(this.tokenId).subscribe((res: any) => {
      console.log(res);
      const emailGenerated = res.data.introduceSession.addresses[0].address;
      this.mailId = res.data.introduceSession.id;
      this.F_email.setValue(emailGenerated);
      this._authService.setId(this.mailId);
      this._authService.setTemporaryEmail(emailGenerated);
      this.copyTextTooltip = 'Copy';
    })
  }

  public clearInput() {
    this._authService.clearStorage();
    this.form.reset();
  }

  public copyEmail() {
    this._clipboard.copy(this.F_email.value);
    this.copyTextTooltip = 'Copied';
  }

}
