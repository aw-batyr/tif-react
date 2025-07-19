import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  About,
  B2b,
  BecomeSponsor,
  Contacts,
  Home,
  Impressions,
  ImpressionsTm,
  Media,
  News,
  NewsInner,
  Participants,
  StendForm,
} from "./pages";
import { Error } from "./components/layout/error.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Home />, path: "", errorElement: <Error /> },
      { element: <About />, path: "about", errorElement: <Error /> },
      { element: <B2b />, path: "B2B-B2G", errorElement: <Error /> },
      {
        element: <BecomeSponsor />,
        path: "become-sponsor",
        errorElement: <Error />,
      },
      { element: <StendForm />, path: "stend-form", errorElement: <Error /> },
      { element: <Contacts />, path: "contacts", errorElement: <Error /> },
      { element: <News />, path: "news", errorElement: <Error /> },
      { element: <NewsInner />, path: "news/:id", errorElement: <Error /> },
      {
        element: <Participants />,
        path: "participants",
        errorElement: <Error />,
      },
      { element: <Media />, path: "media", errorElement: <Error /> },
      {
        element: <Impressions />,
        path: "impressions",
        errorElement: <Error />,
      },
      {
        element: <ImpressionsTm />,
        path: "impressions-tm",
        errorElement: <Error />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
