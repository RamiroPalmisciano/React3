import React from 'react';
import { Link } from 'react-router-dom';

function TaskItem({ task }) {
  return (
    <li className="list-group-item">
      <Link to={`/task/${task.id}`}>
        <h5>{task.title}</h5>
        <p>{task.description}</p>
      </Link>
    </li>
  );
}

export default TaskItem;
