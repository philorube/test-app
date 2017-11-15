import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { OrgService } from '../../orgs/shared/org.service';
import { IRepo } from '../../shared/repo';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RepoListComponent implements OnInit {

  repos: IRepo[];
  orgName: string;

  constructor(
    private orgService: OrgService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.orgName = this.route.snapshot.paramMap.get('name');

    this.orgService.getOrgRepos(this.orgName)
    .subscribe(
      repos => this.repos = repos,
      // error => this.errorMessage = <any>error,
      // () => this.filteredUsers = this.users
    );
  }

}
