import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrimaryButton from "./components/PrimaryButton";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import "./index.css";

const App = () => {
  console.log(process.env.REACT_APP_URL);
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
    <App />
  </ThemeProvider>
);
