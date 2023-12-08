import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainRouts } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRouts />
      </BrowserRouter>
    </div>
  );
}

export default App;
