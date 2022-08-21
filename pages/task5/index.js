import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

export default function Task2() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {/* <Grid spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ backgroundColor: 'gray', height: '80vh' }}
            ></Grid>
            <Grid
              item
              xs={12}
              sx={{ backgroundColor: 'red', height: '50vh', position: 'sticky', top: '0px' }}
            ></Grid>
          </Grid> */}
          <Box sx={{ backgroundColor: 'gray', height: '80vh' }}></Box>
          <Box sx={{ backgroundColor: 'red', height: '70vh', position: 'sticky', top: '0px' }}></Box>
          </Grid>
        <Grid item xs={8} sx={{ backgroundColor: 'yellow', height: '300vh' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            aliquam quis dolorem. Laudantium facilis maxime ipsum. Maxime optio
            sequi quas incidunt, cum accusantium adipisci impedit ullam
            explicabo, et praesentium culpa aperiam voluptates neque blanditiis.
            Voluptate fugit ad recusandae corporis sequi nemo voluptates aliquid
            possimus itaque. Corrupti, esse voluptatum? Adipisci veritatis
            quisquam distinctio exercitationem, ipsum officia reiciendis
            mollitia eveniet quis obcaecati iure, perspiciatis quia maiores
            fugit provident, nobis eum repellat ad quod. Nemo nulla unde eaque
            nostrum maiores libero maxime, distinctio molestias accusamus
            corporis tenetur facere eos molestiae aspernatur labore! Deleniti
            fuga consectetur porro, tempore velit perferendis tenetur eaque
            incidunt perspiciatis, iste vitae. Doloremque ratione nemo amet unde
            ea quam et ducimus perferendis sunt, enim dolore magnam repellat
            ipsum, inventore suscipit quis sapiente harum eveniet impedit modi
            adipisci eaque laboriosam? Quia ea animi soluta vitae, hic nam
            maxime ipsa excepturi facilis ipsum temporibus? Quaerat minima quas
            impedit, molestiae repudiandae dolorem ratione minus, libero,
            tenetur sequi id blanditiis sit soluta fugiat rem in tempora dolor
            incidunt architecto? Culpa consequatur deserunt tempora, quidem
            rerum saepe eos? Voluptatum numquam iure ducimus consequuntur
            aliquam, tempore a! Harum minus nesciunt omnis exercitationem qui?
            Perferendis maiores explicabo totam perspiciatis similique autem
            distinctio in odit voluptas fugiat! Nobis voluptatum neque assumenda
            fuga quidem ut vitae? Omnis assumenda sapiente illo error
            accusantium dolorum nostrum, ex, minus repellendus rem tempora
            exercitationem fuga molestiae tenetur facere velit eos. Autem
            voluptas veritatis facere explicabo, commodi soluta. Veniam, quasi
            repudiandae. Impedit voluptates, saepe, sit blanditiis inventore
            earum cumque et quo, animi odio ratione!
          </p>
        </Grid>
        <Grid
          item
          xs={2}
        >
          <Box sx={{ backgroundColor: 'pink', height: '40vh' }}></Box>
          <Box sx={{ backgroundColor: 'green', height: '60vh', position: 'sticky', top: '0px' }}></Box>
          
        </Grid>
      </Grid>
    </div>
  );
}
