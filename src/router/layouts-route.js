    import { Layout1Route } from "./layout1-route";
    import { ExtraPages } from "./extra-pages-route";
import Error404Screen from "./Error404Screen";

    export const LayoutsRoute = [...Layout1Route, ...ExtraPages, {
        path: "*", // Catch-all route
        element: <Error404Screen/>,
    }];
