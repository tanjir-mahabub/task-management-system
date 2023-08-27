import { useState } from 'react';

const TaskForm = ({ onTaskAdd }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'low',
    startDate: '',
    endDate: '',
    status: 'todo',
    assignedPerson: 'Person1',
    attachments: [],
    subTasks: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.title.trim() === '') {
      alert('Title is required.');
      return;
    }
    onTaskAdd(taskData);
    setTaskData({
      title: '',
      description: '',
      priority: 'low',
      startDate: '',
      endDate: '',
      status: 'todo',
      assignedPerson: 'Person1',
      attachments: [],
      subTasks: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={taskData.title}
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={taskData.description}
          onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
        />
      </div>
      <div>
  <label>Priority:</label>
  <select
    value={taskData.priority}
    onChange={(e) => setTaskData({ ...taskData, priority: e.target.value })}
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>
</div>

<div>
  <label>Start Date:</label>
  <input
    type="date"
    value={taskData.startDate}
    onChange={(e) => setTaskData({ ...taskData, startDate: e.target.value })}
  />
</div>

<div>
  <label>End Date:</label>
  <input
    type="date"
    value={taskData.endDate}
    onChange={(e) => setTaskData({ ...taskData, endDate: e.target.value })}
  />
</div>

<div>
  <label>Status:</label>
  <select
    value={taskData.status}
    onChange={(e) => setTaskData({ ...taskData, status: e.target.value })}
  >
    <option value="todo">To-do</option>
    <option value="inProgress">In Progress</option>
    <option value="done">Done</option>
  </select>
</div>

<div>
  <label>Assigned Person:</label>
  <select
    value={taskData.assignedPerson}
    onChange={(e) => setTaskData({ ...taskData, assignedPerson: e.target.value })}
  >
    <option value="Person1">Person 1</option>
    <option value="Person2">Person 2</option>
    <option value="Person3">Person 3</option>
  </select>
</div>

<div>
  <label>Attachments:</label>
  <input
    type="file"
    multiple
    onChange={(e) => setTaskData({ ...taskData, attachments: e.target.files })}
  />
</div>

<div>
  <label>Subtasks:</label>
  {/* Implement dynamic list of subtasks */}
</div>

<button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;