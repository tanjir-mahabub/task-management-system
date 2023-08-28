import { useState } from 'react';
import useLocalStorage from '../useLocalStorage';

const EditForm = ({ task }) => {


    return (
        <>
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
        </>
    );
};

export default EditForm;
