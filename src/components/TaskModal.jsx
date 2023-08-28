import { useEffect, useState } from 'react';
import '../App.css'
import CreateTaskForm from './CreateTaskForm';
import EditForm from './EditForm';
import useLocalStorage from '../useLocalStorage';

const TaskModal = ({ onClose, task, updateToDo }) => {

  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [addTaskData, setAddTaskData] = useState([]);

  const [editTask, setEditTask] = useState([]);
  
  const onEdit = (task) => {
    console.log(task);
    setEditTask(task)
  }

  const onDelete = (selectTask) => {
    const updatedTasks = tasks.filter(task => task.id !== selectTask.id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
    onClose();
  }
  

  const addTask = (task) => {
    setAddTaskData(prevState => [...prevState, task]);
    updateToDo(task)
    console.log(task)
    onClose();
  }
  
  return (
    <div className="modal">
      <div className="modal-content">
        {task ? (
            <div className='flex flex-col'>
              <EditForm task={task} />
            
            <div className='flex justify-center gap-3'>
              <button onClick={() => onEdit(task)}>Edit</button>
              <button onClick={() => onDelete(task)}>Delete</button>
            </div>
          </div>
        ) : (
          <CreateTaskForm onClose={onClose} addTask={addTask} updateToDo={updateToDo} />
        )}
       
      </div>
    </div>
  );
};

export default TaskModal;
