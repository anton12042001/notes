import HomePage from "../../page/HomePage";

interface Routes {
    path: string
    element: JSX.Element
}

export enum RoutePath {
    home = "/home",

}
export const privateRoutes: Array<Routes> = [
    {path: RoutePath.home, element: <HomePage/>},
]