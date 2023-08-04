import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-email',
  templateUrl: './sample-email.component.html',
  styleUrls: ['./sample-email.component.css']
})
export class SampleEmailComponent implements OnInit {
  public from: string = '';
  public isEmpty = false;
  public emailData!: Array<any>;

  constructor() { }

  ngOnInit() {
    this.emailData = [
      {
        toAddr: "example@10mail.org",
        text: "Hello\r\n",
        rawSize: 812,
        html: null,
        headerSubject: "Hello",
        fromAddr: "test@example.com",
        downloadUrl: "https://dropmail.me/download/mail/gql:1:9c3316a6-69d2-42fd-a2e2-3f3fd72f494a/vb18co6tn6b4pv10hgr7lhaljcnrhvk5",
      },
      {
        toAddr: "example@10mail.org",
        text: "Hello\r\n",
        rawSize: 812,
        html: null,
        headerSubject: "Hello",
        fromAddr: "test@example.com",
        downloadUrl: "https://dropmail.me/download/mail/gql:1:9c3316a6-69d2-42fd-a2e2-3f3fd72f494a/vb18co6tn6b4pv10hgr7lhaljcnrhvk5",
      },

    ]
  }

}
