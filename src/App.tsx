import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainRouts } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainRouts />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
