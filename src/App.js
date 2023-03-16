import logo from "./logo.svg";
import "./App.css";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <TaskManager />
      </header>
    </div>
  );
}

export default App;
