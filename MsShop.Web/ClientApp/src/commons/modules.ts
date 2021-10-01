export interface IRouter {
    path: string;
    name: string;
    exact?: boolean;
    component: any;
  }