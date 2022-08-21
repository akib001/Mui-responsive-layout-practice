import { Box } from '@mui/system';
import React from 'react';

const classes = {
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '60px',
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
  },

  header: {
    width: '100%',
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    height: '60px',
    textAlign: 'center',
    marginTop: '-20px'  
},

  body: {
    height: 'calc(100vh - 120px)',
    overflow: 'scroll',
  },
};

const index = () => {
  return (
    <>
      <Box sx={classes.header}>
        <p>Header</p>
      </Box>
      <Box sx={classes.body}>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
        <h2>Fixed/Sticky Footer Example</h2>
        <p>The footer is placed at the bottom of the page.</p>
      </Box>

      <Box sx={classes.footer}>
        <p>Footer</p>
      </Box>
    </>
  );
};

export default index;
