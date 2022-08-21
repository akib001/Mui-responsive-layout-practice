import { Grid } from '@mui/material';
import Image from 'next/image';

export default function Task3() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ backgroundColor: 'Red', height: '100vh' }}
        >
          Item 1
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ backgroundColor: 'yellow', height: '100vh' }}
        >
          Item 2
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ backgroundColor: 'dodgerblue', height: '100vh' }}
        >
          Item 3
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{ backgroundColor: 'green', height: '100vh' }}
        >
          Item 4
        </Grid>
      </Grid>
    </div>
  );
}
