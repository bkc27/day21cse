import React from 'react'

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([
        response.data,
        ...tasks
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(
        tasks.filter((task) => task._id !== id)
      )
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTask = async (task) => {
    try {
      const response = await axios.put(`${API_URL}/${task._id}`, {
        completed: !task.completed
      });
      setTasks(
        tasks.map((item) => item._id === task._id ? response.data : item)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (task) => {
    const newTitle = prompt("Enter Title", task.title);

  };

  return (
    <div>App</div>
  )
}

export default App