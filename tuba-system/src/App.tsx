"use server"
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
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import useAxios from "./hooks/useAxios";

const queryClient = new QueryClient();

const App = () => {
  const { server } = useAxios("todos");
  
  const fetchData = async () => {
    const response = await server.get("todos", {
      params: { id: 1 }, 
    });
    console.log(response.data)
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos",12],
    queryFn: fetchData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster />
      </QueryClientProvider>
    </I18nextProvider>
  </ThemeProvider>
);
