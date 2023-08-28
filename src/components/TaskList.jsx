import { useState } from 'react';
import TaskModal from './TaskModal';

const TaskList = ({ title, tasks }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="flex flex-col border rounded-lg shadow my-5 overflow-hidden">
      <div className='py-2 border-b bg-purple-500'>
        <h2 className='text-xl font-bold text-white/90'>{title}</h2>
      </div>
      <ul className=''>
        {tasks.map((task, i) => (
          <li className='hover:bg-gray-200 cursor-pointer hover:text-purple-700 py-3 border-b last:border-b-0 text-lg font-semibold' key={task.id + task.title} onClick={() => handleTaskClick(task)}>
            {task.title}
          </li>
        ))}
      </ul>
      {selectedTask && (
        <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
};

export default TaskList;