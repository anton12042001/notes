import HomePage from "../page/HomePage";
import NotesPage from "../page/NotesPage";
import AppPage from "../page/AppPage";

interface Routes {
    path: string
    element: JSX.Element
}

export enum RoutePath {
    app = "/",
    home = "/home",
    notesId = '/notes/:id',
}
export const privateRoutes: Array<Routes> = [
    {path: RoutePath.home, element: <HomePage/>},
    {path: RoutePath.notesId, element: <NotesPage/>},
    {path: RoutePath.app, element: <AppPage/>},
]