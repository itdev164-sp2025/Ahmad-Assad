import React, { useState, useEffect } from 'react';
import { Box, Card, Textarea } from 'rebass' 
import marked from 'marked';

const Notes = () => {
  const [note, setNote] = useState(() => localStorage.getItem('note') || '');

  useEffect(() => {
    localStorage.setItem('note', note);
  }, [note]);

  return (
    <Card width={[1, 1 / 2]} p={3} mt={3}>
      <h2>Notes</h2>
      <Textarea
        rows={5}
        placeholder="Write your notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <Box mt={3}>
        <h3>Preview</h3>
        <Box
          sx={{
            padding: 2,
            backgroundColor: '#eee',
            borderRadius: '4px',
          }}
          dangerouslySetInnerHTML={{ __html: marked(note) }}
        />
      </Box>
    </Card>
  );
};

export default Notes;