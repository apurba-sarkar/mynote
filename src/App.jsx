import Body from "./components/Body";

import Postbox from "./components/Postbox";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  useEffect(() => {
    const handleCopyPaste = (event) => {
      event.preventDefault();
      alert("copy paste not allowed ");
    };

    // Add event listeners to disable copy and paste
    document.addEventListener("copy", handleCopyPaste);
    document.addEventListener("paste", handleCopyPaste);

    // Clean up by removing event listeners when the component unmounts
    return () => {
      document.removeEventListener("copy", handleCopyPaste);
      document.removeEventListener("paste", handleCopyPaste);
    };
  }, []);
  return (
    <div className="mainapp">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="grid">
          <div className="grid-item1">
            <Postbox />
          </div>
          <div className="grid-item2">
            <div className="grid-item2-body">
              <Body />
            </div>
          </div>
        </div>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px  ",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
};

export default App;
