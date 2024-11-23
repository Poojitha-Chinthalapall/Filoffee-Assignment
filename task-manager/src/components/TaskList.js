import React, { useState } from 'react';
import EditTaskModal from './EditTaskModal';
import './TaskList.css';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <>
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          updateTask={updateTask}
          closeModal={() => setEditingTask(null)}
        />
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th className='headings ml-4'>Title</th>
            <th className='headings'>Description</th>
            <th className='headings'>Due Date</th>
            <th className='headings'>Status</th>
            <th className='headings'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2 edit-btn"
                  onClick={() => setEditingTask(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger delete-btn"
                  onClick={() =>
                    window.confirm('Are you sure?') && deleteTask(task.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
