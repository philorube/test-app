import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IRepo } from '../../shared/repo';

@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RepoViewComponent implements OnInit {

  @Input() repo: IRepo;

  constructor() { }

  ngOnInit() {
  }

}
