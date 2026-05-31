import { useEffect, useState } from "react";

function App() {


  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [task, setTask] = useState("");

  
  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);



  function ADD() {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  }


  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div class="main">
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter ur task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={ADD}>
        Add
      </button>

      <ul>

        {
          todos.map((todo, index) => (

            <li key={index}>

              {todo}

              <button class = "del" 
              onClick={() => deleteTodo(index)}>
                Delete
              </button>

            </li>

          ))
        }

      </ul>
    </div>
  );
}

export default App;