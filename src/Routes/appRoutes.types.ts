export interface IAppRoutes {
    path:string;
    element: ()=> JSX.Element;
    children?: any
}
