import { useEffect, useState } from 'react';
import '../App.css'
import CreateTaskForm from './CreateTaskForm';

const TaskModal = ({  onClose, task }) => {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

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

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')) || [])
  }, [task])
  
  return (
    <div className="modal">
      <div className="modal-content">
        {task ? (
            <div className='flex flex-col'>
              <div className='w-[70vw] h-[60vh] flex flex-col justify-start text-left gap-5 capitalize py-3'>
                <p className='text-xl'>
                  <span className='font-semibold'>Title:</span> {task.title}
                </p>
                <p className='text-xl'>
                  <span className='font-semibold'>Description:</span> {task.description}
                </p>

                <p className='text-xl'>
                  <span className='font-semibold'>Priority:</span> {task.priority}
                </p>

                <p className='text-xl'>
                  <span className='font-semibold'>Start Date:</span> {task.startDate}
                </p>

                <p className='text-xl'>
                  <span className='font-semibold'>End Date:</span> {task.endDate}
                </p>

                <p className='text-xl'>
                  <span className='font-semibold'>Status:</span> {task.status}
                </p>

                <p className='text-xl'>
                  <span className='font-semibold'>Assigned Person:</span> {task.assignedPerson}
                </p>

                <p className='text-xl'>
                  <span className='font-semibold'>Attachment:</span> {task.attachments}
                </p>

                <p className='text-xl'>
                  <span className='font-semibold'>Sub Tasks:</span> {task.subTasks}
                </p>
            </div>
            
            <div className='flex justify-center gap-3'>
              <button onClick={() => onEdit(task)}>Edit</button>
              <button onClick={() => onDelete(task)}>Delete</button>
            </div>
          </div>
        ) : (
          <CreateTaskForm editTask={editTask} />
        )}
       
      </div>
    </div>
  );
};

export default TaskModal;
