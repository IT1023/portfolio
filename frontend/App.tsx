import { Suspense } from "react";
import Router from "./routes/Router";
import Loader from "./shared/ui/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router />
    </Suspense>
  );
}

export default App;
