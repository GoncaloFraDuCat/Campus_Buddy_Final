import React from "react";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the App</h1>
      <Login /> {/* Render the Login component */}
    </div>
  );
}

export const App = (props) => {
  return <h1>Hello World</h1>;
};
export default App;