import "./App.css";
import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <div>
      <h1 className="title">Login</h1>
      <FaBeer />
      <form>
          <input type="text" placeholder="Usernamennyyyaaa" />
      </form>
      <form>
        <input type ="password" placeholder="password" /> 
      </form>
      <button>Klik</button>
      <button>Klik2</button>
    </div>
  );
}

export default App;
