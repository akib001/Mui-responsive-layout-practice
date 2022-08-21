import { Grid } from '@mui/material';
import Image from 'next/image';

export default function Task2() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ backgroundColor: 'Red', height: '100vh' }}
          order={{ xs: 2, md: 1 }}
        >
          Item 1
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ backgroundColor: 'yellow', height: '100vh' }}
          order={{ xs: 1, md: 2 }}
        >
          Item 2
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ backgroundColor: 'dodgerblue', height: '100vh' }}
          order={{ xs: 3, md: 3 }}
        >
          Item 3
        </Grid>
      </Grid>
    </div>
  );
}
