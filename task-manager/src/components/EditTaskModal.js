import React, { useState } from 'react';
import './EditTaskModal.css';

const EditTaskModal = ({ task, updateTask, closeModal }) => {
  const [formData, setFormData] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(formData);
    closeModal();
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <input
                type="text"
                name="title"
                className="form-control mb-3"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="description"
                className="form-control mb-3"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <input
                type="date"
                name="dueDate"
                className="form-control mb-3"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
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
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button type="button" className="btn btn-secondary cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
