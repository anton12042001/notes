import HomePage from "../page/HomePage";
import NotesPage from "../page/NotesPage";

interface Routes {
    path: string
    element: JSX.Element
}

export enum RoutePath {
    home = "/home",
    notesId = '/notes/:id',
}
export const privateRoutes: Array<Routes> = [
    {path: RoutePath.home, element: <HomePage/>},
    {path: RoutePath.notesId, element: <NotesPage/>},
]