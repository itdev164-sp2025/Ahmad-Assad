import React, { useState, useEffect } from 'react';
import { Card, Box, Button } from 'rebass';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const HabitTracker = () => {
  const [habit, setHabit] = useState(() => JSON.parse(localStorage.getItem('habit')) || []);

  useEffect(() => {
    localStorage.setItem('habit', JSON.stringify(habit));
  }, [habit]);

  const toggleDay = (i) => {
    const updated = [...habit];
    updated[i] = !updated[i];
    setHabit(updated);
  };

  return (
    <Card width={[1, 1 / 2]} p={3} mt={3}>
      <h2>Habit Tracker</h2>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        {days.map((day, i) => (
          <Button
            key={i}
            onClick={() => toggleDay(i)}
            variant={habit[i] ? 'primary' : 'outline'}
            m={1}
          >
            {day}
          </Button>
        ))}
      </Box>
    </Card>
  );
};

export default HabitTracker;