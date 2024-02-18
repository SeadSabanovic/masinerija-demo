import "./App.scss";
import Header from "./components/UI/Header/Header";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Breakdown from "./components/pages/Breakdown";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main-container">
        <Breakdown />
      </div>
    </div>
  );
}

export default App;
