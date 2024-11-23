import React, { useState } from 'react';
import './AddTask.css';

const AddTask = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...formData, id: Date.now() };
    addTask(newTask);
    setFormData({ title: '', description: '', dueDate: '', status: 'Pending' });
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form mb-4">
      <div className="row g-3">
        <div className="col-md-3 input-field">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Task Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3 input-field">
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3 input-field">
          <input
            type="date"
            name="dueDate"
            className="form-control"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2 input-field">
          <select
            name="status"
            className="form-select"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="col-md-1 input-field">
          <button type="submit" className="btn btn-primary w-100 button">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
