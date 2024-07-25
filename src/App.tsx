import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./Componets/Rootlayout";
import Login from "./pages/Login";
import DataVisulizationMain from "./pages/DataVisulizationMain";
import DashboardLayout from "./Componets/DashboardLayout";

//layouts

//PS - We can add multiple routes in DashboardLayout after login
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route path='visulization' element={<DataVisulizationMain />} />
          {/* <Route path='assets' element={<Assets />} /> */}
          {/* <Route path='modelling' element={<Modelling />} /> */}
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
