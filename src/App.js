import "./index.css";
import Employee from "./components/Employee";
import { useState } from 'react'

function App() {
  const [role, setRole] = useState('');
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
        <input type="text" onChange={(e) => {
          console.log(e.target.value)
          setRole(e.target.value)
        }} />
          <Employee name="John" role="Intern" />
          <Employee name="Alice" role={role} />
          <Employee name="Anna" />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
