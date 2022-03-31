export interface IRoute {
  name: string;
  path: string;
  element: React.ReactNode;
  icon?: React.ReactNode;
}

export interface IRoutes {
  name: string;
  path: string;
  element: React.ReactNode;
  children?: IRoute[];
  icon?: React.ReactNode;
}
