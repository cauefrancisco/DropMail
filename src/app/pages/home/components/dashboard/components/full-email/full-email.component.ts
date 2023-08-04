import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-email',
  templateUrl: './full-email.component.html',
  styleUrls: ['./full-email.component.css']
})
export class FullEmailComponent implements OnInit {
  @Input() fullEmailData: any;

  constructor() { }

  ngOnInit() {
    console.log('fullEmailData', this.fullEmailData);
  }

}
