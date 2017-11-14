import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrgService } from '../shared/org.service';
import { IOrg } from '../shared/org';

@Component({
  selector: 'app-org-search',
  templateUrl: './org-search.component.html',
  styleUrls: ['./org-search.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OrgSearchComponent implements OnInit {

  org: IOrg;
  errorMessage = '';
  orgSearch = '';

  constructor(private orgService: OrgService) { }

  ngOnInit() {
  }

  searchForOrg() {
    this.orgService.getOrg(this.orgSearch)
    .subscribe(
      org => this.org = org,
      error => this.errorMessage = <any>error
    );
  }
}
