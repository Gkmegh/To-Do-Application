import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeTask(index));
  };

  const handleToggle = (index) => {
    dispatch(toggleTask(index));
  };

  return (
    <ul >
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? 'completed' : ''}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(index)}
            />
            <span>{task.text}</span>
          </label>
          <button onClick={() => handleRemove(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
