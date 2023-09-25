import { RouterProvider } from 'react-router-dom';
import { router } from "./routes/route"
import './App.css';
import "./script.js"
import"bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
