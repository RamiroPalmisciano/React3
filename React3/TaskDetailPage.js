import React from 'react';
import { useParams } from 'react-router-dom';
import tasks from '../data';

function TaskDetailPage() {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === parseInt(id));

  return (
    <div className="container mt-4">
      {task ? (
        <>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Fecha de creación: {task.date}</p>
          <p>Estado: {task.completed ? "Completa" : "Incompleta"}</p>
        </>
      ) : (
        <p>Tarea no encontrada</p>
      )}
    </div>
  );
}

export default TaskDetailPage;
