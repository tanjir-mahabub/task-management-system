import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import "./app.css";

const App = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  
  // Organize tasks by status
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'inProgress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
  }, [])

  return (
    <div className="w-[70%] h-full mt-32 mx-auto">
      <div className="flex flex-col border p-5 rounded shadow">
      <h1 className="text-xl font-bold py-3">Task Management System</h1>
      <button className="bg-black text-white px-3 py-2.5 rounded-md
      my-3" type="button" onClick={handleOpenCreateModal}>Create Task</button>
      {isCreateModalOpen && (
        <TaskModal onClose={handleCloseCreateModal} />
      )}

      <div className="">
        <TaskList title="To-do" tasks={todoTasks}  
          />
        <TaskList title="In Progress" tasks={inProgressTasks}  />
        <TaskList title="Done" tasks={doneTasks} />
      </div>
    </div>
    </div>
  );
};

export default App;
