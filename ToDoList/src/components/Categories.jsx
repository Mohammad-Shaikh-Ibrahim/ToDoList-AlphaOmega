import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default function Categories() {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        backgroundColor: '#f8fafc',
        borderRadius: 2,
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        '& .MuiToggleButton-root': {
          padding: '0.8rem 1.5rem',
          fontWeight: 'bold',
          fontSize: '1rem',
          border: 'none',
          borderRadius: 2,
          textTransform: 'none',
          transition: '0.3s',
          '&.Mui-selected': {
            background: 'linear-gradient(to right, #3b82f6, #2563eb)',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          },
        },
      }}
    >
      <ToggleButton value="left" aria-label="all tasks">
        <FormatListBulletedIcon sx={{ mr: 1 }} />
        All
      </ToggleButton>
      <ToggleButton value="center" aria-label="to-do">
        <TaskAltIcon sx={{ mr: 1 }} />
        To-Do
      </ToggleButton>
      <ToggleButton value="right" aria-label="completed">
        <DoneAllIcon sx={{ mr: 1 }} />
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
