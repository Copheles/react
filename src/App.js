import "./App.css";
import Employee from "./components/Employee";

function App() {
  
  const showEmployees = false;
  return (
    <div className="App">
      {showEmployees ? <Employee /> : <p>You cannot see the employees</p>}
    </div>
  );
}

export default App;
