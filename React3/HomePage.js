import React from 'react';
import tasks from '../data';
import TaskItem from '../components/TaskItem';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mt-4">
      <h1>Lista de Tareas</h1>
      <ul className="list-group">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      <Link to="/create" className="btn btn-primary mt-3">
        Crear Nueva Tarea
      </Link>
    </div>
  );
}

export default HomePage;
