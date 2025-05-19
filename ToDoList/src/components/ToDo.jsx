import Categories from './Categories';
import ToDoCard from './ToDoCard';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function ToDo() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to right, #e0f2fe, #f0f9ff)',
        }}
      >
        <Card
          sx={{
            width: '100%',
            padding: 4,
            borderRadius: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            background: 'white',
          }}
        >
          <CardContent>
            <Box
              sx={{
                textAlign: 'center',
                mb: 3,
                background: 'linear-gradient(to right, #3b82f6, #2563eb)',
                borderRadius: 3,
                padding: '1rem 2rem',
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{ color: 'white', fontWeight: 'bold' }}
              >
                Alpha Omega ToDo List
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Categories />
            </Box>
          </CardContent>
          <Divider sx={{ margin: '2em 0' }} />
          <ToDoCard />
        </Card>
      </Container>
    </>
  );
}
