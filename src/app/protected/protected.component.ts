import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
