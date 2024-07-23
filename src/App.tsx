import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./Componets/Rootlayout";
import Login from "./pages/Login";
import DataVisulizationMain from "./pages/DataVisulizationMain";

//layouts

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path='/visulization' element={<DataVisulizationMain />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
