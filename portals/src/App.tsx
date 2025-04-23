import ReactDOM from "react-dom/client";
import SideSection from "./sections/SideSection";
import LoginsSection from "./sections/LoginsSection";
import "./index.css";

const App = () => {
  return (
    <main>
      <SideSection />
      <LoginsSection />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
