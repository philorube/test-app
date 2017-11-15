import { IOrg } from '../orgs/shared/org';

export interface IRepo {
    name: string;
    id: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    owner: IOrg;
}
