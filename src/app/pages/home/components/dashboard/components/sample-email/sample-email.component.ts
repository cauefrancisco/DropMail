import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample-email',
  templateUrl: './sample-email.component.html',
  styleUrls: ['./sample-email.component.css']
})
export class SampleEmailComponent implements OnInit {
  @Output() onSampleEmailClick = new EventEmitter<[]>();

  public from: string = '';
  public emailData!: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  public openFullPost(element: any): void {
    this.onSampleEmailClick.emit(element);
  }

  public limitString(text: string): string {
    return text.slice(0, 25);
  }

}
