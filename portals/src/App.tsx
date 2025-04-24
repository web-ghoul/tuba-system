import ReactDOM from "react-dom/client";
import SideAuthSection from "tuba_system/SideAuthSection";
import LoginsSection from "./sections/LoginsSection";
import i18n from "tuba_system/i18n";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import SafeComponent from "./SafeComponent ";

const App = () => {
  return (
    <main>
      <SafeComponent>
        <SideAuthSection />
      </SafeComponent>
      <LoginsSection />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
