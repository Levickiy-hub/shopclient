import './App.css';
import {AppRouter} from "./components/appRouter";
import Navbar from "./components/navbar"
function App() {
    const routes = AppRouter();
  return (
    <div>
     <Navbar/>
        {routes}
    </div>
  );
}

export default App;
