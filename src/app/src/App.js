import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");

  // Fetch all todos
  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/todos/");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Load todos when page loads
  useEffect(() => {
    fetchTodos();
  }, []);

  // Add a new todo
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) return;

    try {
      const response = await fetch("http://localhost:8000/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
        }),
      });

      if (response.ok) {
        setDescription("");
        fetchTodos();
      }
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div className="App">

      {/* Todo List */}
      <div className="todo-section">
        <h1>📋 List of TODOs</h1>

        {todos.length === 0 ? (
          <p className="empty-text">No TODOs available.</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <span>✔</span>
                <span>{todo.description}</span>
              </li>
            ))}
          </ul>
        )}

        <p className="count">
          Total TODOs: <strong>{todos.length}</strong>
        </p>
      </div>

      {/* Create Todo */}
      <div className="form-section">
        <h1>➕ Create a ToDo</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">ToDo</label>

          <input
            id="todo"
            type="text"
            placeholder="Enter your task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Add ToDo</button>
        </form>
      </div>

    </div>
  );
}