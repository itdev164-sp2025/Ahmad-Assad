import React, { useState, useEffect } from 'react';
import { Box, Button, Card, Input } from 'rebass';
import styled from 'styled-components';

const TaskItem = styled(Box)`
  margin-top: 10px;
  padding: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  background-color: #f5f5f5;
`;

const TaskList = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, done: false }]);
      setInput('');
    }
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <Card width={[1, 1 / 2]} p={3} mt={3}>
      <h2>Tasks</h2>
      <Input
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        mb={2}
      />
      <Button onClick={addTask}>Add</Button>
      {tasks.map((task, i) => (
        <TaskItem
          key={i}
          sx={{ textDecoration: task.done ? 'line-through' : 'none', cursor: 'pointer' }}
          onClick={() => toggleDone(i)}
        >
          {task.text}
        </TaskItem>
      ))}
    </Card>
  );
};

export default TaskList;