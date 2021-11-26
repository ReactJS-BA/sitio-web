import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";

import App from "src/modules/App";

// Create client and provide to app
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
