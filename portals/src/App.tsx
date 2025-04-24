import ReactDOM from "react-dom/client";
import SideAuthSection from "tuba_system/SideAuthSection";
import LoginsSection from "./sections/LoginsSection";
import "./index.css";

const App = () => {
  console.log(process.env.REACT_APP_URL)
  return (
    <main>
      <SideAuthSection />
      <LoginsSection />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
