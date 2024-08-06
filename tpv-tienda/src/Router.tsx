import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Articles } from "./pages/Articles";
import { Purchases } from "./pages/Purchases";
import { Daily } from "./pages/Daily";
import { Clients } from "./pages/Clients";
import { PATHS } from "./constants";
import { Returns } from "./pages/Returns";
import { Sales } from "./pages/Sales";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouterErrorPage />,
    children: [
      { path: PATHS.articles, element: <Articles /> },
      { path: PATHS.daily, element: <Daily /> },
      { path: PATHS.clients, element: <Clients /> },
      { path: PATHS.purchases, element: <Purchases /> },
      { path: PATHS.returns, element: <Returns /> },
      { path: PATHS.sales, element: <Sales /> },
    ]
  },
]);

function RouterErrorPage() {
  return (<section>
    <h1>No se ha encontrado la pagina</h1>
  </section>)
}

export function Router() {
  return <RouterProvider router={router} />
}