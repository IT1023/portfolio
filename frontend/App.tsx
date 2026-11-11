import { Suspense } from "react";
import Router from "./routes/Router";
import Loader from "./shared/ui/Loader";

function App() {
  return (
    <Suspense
      fallback={
        <div className="bg-background w-screen h-screen flex justify-center items-center">
          <Loader />
        </div>
      }
    >
      <Router />
    </Suspense>
  );
}

export default App;
