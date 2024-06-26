import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {  About,  Cocktail,  HomeLayout,  Landing,  Newsletter,  Error,  SinglePageError,} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as SingleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // queries in the cached is present for 5 mins
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // error page for 404 (when urls is no correct)
    // error page for all pages
    errorElement: <Error />,
    children: [
      {
        index: true,//this page is displayed at "/" (home route)
        // path: "landing",
        // error page for individual page
        errorElement: <SinglePageError />,//error page 
        loader: landingLoader(queryClient),//loads  /fetches the data even before the page is rendered
        element: <Landing />,//component to be displayed
      },
      {
        path: "cocktail/:id",//loaders also
        errorElement: <SinglePageError />,
        loader: SingleCocktailLoader(queryClient),//passing queryClient as in argument to loader  so as to use it in loader function
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        action: newsLetterAction,
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;

