import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainRoutes } from "./routes/mainRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
