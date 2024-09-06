import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './components/TodoItem';
import './App.css'

const endpoint = "http://localhost:3000"

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get(`${endpoint}/api/todos`);
    setTodos(response.data);
  };

  const addTodo = async () => {
    const response = await axios.post(`${endpoint}/api/todos`, { task });
    setTodos([...todos, response.data]);
    setTask('');
  };

  const deleteTodo = async (id) => {

    await axios.delete(`http://localhost:3000/api/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>To-Do List</h1>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button style={styles.button} onClick={addTodo}>Add</button>
        <div>
          {
            todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
            ))
          }
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    width: '300px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
  },

};

export default App;
