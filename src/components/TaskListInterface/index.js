import React, { useState } from 'react';

const TaskListInterface = () => {
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = () => {
    // Add validation logic here if needed
    if (taskName.trim() !== '') {
      // Add code to handle task creation
      console.log('Creating task:', taskName);
      // Clear input after task creation
      setTaskName('');
    } else {
      // Handle invalid input error
      console.error('Task name cannot be empty');
    }
  };

  return (
    <div>
        <h1>To Do List</h1>
      <input
        type="text"
        value={taskName}
        onChange={handleTaskNameChange}
        placeholder="Enter task name"
      />
      <button onClick={handleSubmit} className='btn btn-primary'>Add Task</button>
    </div>
  );
};

export default TaskListInterface;
