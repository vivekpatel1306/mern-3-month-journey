// "use client"
import { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    
    setLoading(true);
    try {
      await onAddTodo({ title: title.trim(), description: description.trim() });
      setTitle('');
      setDescription('');
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter todo title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="todo-input"
          disabled={loading}
        />
        <textarea
          placeholder="Enter description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="todo-textarea"
          rows="2"
          disabled={loading}
        />
        {error && <span className="error-message">{error}</span>}
      </div>
      <button type="submit" className="add-button" disabled={loading}>
        {loading ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}