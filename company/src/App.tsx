import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router";
import Tuba from "./Tuba";

const App = () => (
  <Tuba/>
);

export default App;

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<RouterProvider router={router} />);
