import { useState } from 'react';
import useLocalStorage from '../useLocalStorage';

const CreateTaskForm = ({ onClose, addTask }) => {
    const [tasks, setTasks] = useLocalStorage('tasks', []);

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

        saveFormDataToLocalstorage(taskData);

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

    const handleAttachmentChange = (e) => {
        setTaskData({ ...taskData, attachments: e.target.files });
    };

    const saveFormDataToLocalstorage = (formData) => {

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Assign a unique ID to the new task
        const updatedTask = { ...formData, id: Date.now() };

        // Update the tasks array with the new task
        const updatedTasks = [...existingTasks, updatedTask];

        // Save the updated tasks array to localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        // onClose();
        
        addTask(updatedTask);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    className='py-1'
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
                    className='py-1.5'
                    
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
                    className='py-1'
                    
                    type="date"
                    value={taskData.startDate}
                    onChange={(e) => setTaskData({ ...taskData, startDate: e.target.value })}
                />
            </div>
            <div>
                <label>End Date:</label>
                <input
                    className='py-1'
                    
                    type="date"
                    value={taskData.endDate}
                    onChange={(e) => setTaskData({ ...taskData, endDate: e.target.value })}
                />
            </div>
            <div>
                <label>Status:</label>
                <select
                    className='py-1.5'
                    
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
                    className='py-1.5'
                
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
                    className='border-0 py-1'
                    type="file"
                    multiple
                    onChange={handleAttachmentChange}
                />
            </div>
            <div className='flex'>
                <div className='h-20'>
                    <label>Subtasks:</label>
                    {/* Implement dynamic list of subtasks */}
                </div>
                <div>
                    <button type="submit">Create Task</button>
                </div>
            </div>
        </form>
    );
};

export default CreateTaskForm;
