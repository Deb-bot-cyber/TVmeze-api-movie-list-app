import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
  console.log("ASSIGNMENT SUBMITTED BY SHUBHAM SAPKAL");
  return (
    <>
    <NavigationBar/>
    <div className="container-fluid">
      <Home />
    </div>
    </>
  );
}

export default App;
