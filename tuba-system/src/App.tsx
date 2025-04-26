import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrimaryButton from "./components/PrimaryButton";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="text-primary">Name: tuba-system</div>
      <PrimaryButton>Login</PrimaryButton>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <App />
      <Toaster />
    </I18nextProvider>
  </ThemeProvider>
);
