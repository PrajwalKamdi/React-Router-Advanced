import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import Form_Com from "./Form.jsx";
import Input, { getProducts } from "./Input/Input.jsx";
import SelectOption from "./SelectOption/SelectOption.jsx";
import "./index.css";
import PrintValue, { formData } from "./PrintValue.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    <Route path="/" element={ <Input/>}  loader={getProducts}/>
    <Route path="/form" element={ <Form_Com/>}/>
    <Route path="/:id" element={ <SelectOption/>}/>
    <Route path="/values" element={ <PrintValue/>}  action={formData}/>


  </Route>)
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
