import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/todopage.css';

function TodoPage() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todopage-container">
      <h1 className="todopage-title">To-Do App</h1>
      <TextField
        label="Add Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Add
      </Button>
      <List className="todo-list">
        {tasks.map((item, index) => (
          <ListItem key={index} className="todo-item">
            <ListItemText primary={item} />
            <Button onClick={() => removeTask(index)}>
              <DeleteIcon />
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoPage;
