import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function ToDoCard() {
    return (
        <Card
            sx={{
                minWidth: 700,
                maxWidth: '100%',
                margin: '1rem auto',
                padding: 2,
                borderRadius: 3,
                boxShadow: 4,
                backgroundColor: '#f9f9f9',
            }}
        >
            <CardContent>
                <Grid container alignItems="center">
                    <Grid size={8}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
                            Learn React
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                            A JavaScript library for building user interfaces.
                        </Typography>
                    </Grid>

                    <Grid size={4} >
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <IconButton aria-label="complete" color="success">
                                <CheckOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="edit" color="primary">
                                <EditOutlinedIcon />
                            </IconButton>
                            <IconButton aria-label="delete" color="error">
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
