import Body from "./components/Body";

import Postbox from "./components/Postbox";

import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <div>
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
      </QueryClientProvider>
    </div>
  );
};

export default App;
