import {BrowserRouter} from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar/>
      <AppRoutes/>
      <a className="developer" href="https://t.me/wabi4" target="blank">
        Developed by <span>abula</span>
      </a>
    </BrowserRouter>

  );
};

export default App;
