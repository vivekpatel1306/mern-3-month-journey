// "use client"
import { useState } from 'react';

export default function TodoItem({ todo, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!editTitle.trim()) return;
    
    setLoading(true);
    try {
      await onUpdate(todo._id, { 
        title: editTitle.trim(), 
        description: editDescription.trim() 
      });
      setIsEditing(false);
    } catch (err) {
      console.error('Update failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async () => {
    try {
      await onToggle(todo._id, todo.completed);
    } catch (err) {
      console.error('Toggle failed:', err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        await onDelete(todo._id);
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="edit-input"
            disabled={loading}
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="edit-textarea"
            rows="2"
            disabled={loading}
          />
          <div className="edit-actions">
            <button onClick={handleUpdate} className="save-button" disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </button>
            <button onClick={() => setIsEditing(false)} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggle}
              className="todo-checkbox"
            />
            <div className="todo-text">
              <h3 className="todo-title">{todo.title}</h3>
              {todo.description && (
                <p className="todo-description">{todo.description}</p>
              )}
              <span className="todo-date">
                {new Date(todo.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={handleDelete} className="delete-button">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}