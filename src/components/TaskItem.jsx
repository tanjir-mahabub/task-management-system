
const TaskItem = ({ task, onDelete, onEdit, onClick }) => {
    return (
        <div className="task-item" onClick={() => onClick(task)}>
        <h3>{task.title}</h3>
        {/* Display other task details */}
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onEdit(task)}>Edit</button>
      </div>
    );
  };
  
  export default TaskItem;