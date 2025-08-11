import { Providers } from "./app/providers";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
