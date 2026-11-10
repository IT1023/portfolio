import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Main from "../layouts/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          {routes.map((r) => {
            return <Route key={r.path} path={r.path} Component={r.component} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
