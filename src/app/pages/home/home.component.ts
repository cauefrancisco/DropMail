import { Component, DoCheck, OnInit } from '@angular/core';
import { MailService } from 'src/app/core/services/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  public tokenId!: string;
  public mailId!: string;
  public title: string = '';

  constructor(
    private _mailService: MailService,
  ) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
  }

  public getMails(): void {
    this._mailService.getMails(this.tokenId, this.mailId).subscribe((res: any) => {
      console.log('emails recebidos', res);
    })
  }



}
