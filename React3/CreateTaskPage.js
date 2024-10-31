import React, { useState } from 'react';

function CreateTaskPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, completed });
  };

  return (
    <div className="container mt-4">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título</label>
          <input type="text" id="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción</label>
          <textarea id="description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" id="completed" className="form-check-input" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
          <label htmlFor="completed" className="form-check-label">¿Completa?</label>
        </div>
        <button type="submit" className="btn btn-primary">Crear Tarea</button>
      </form>
    </div>
  );
}

export default CreateTaskPage;
