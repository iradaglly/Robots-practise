import { Container } from "@mui/system";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const News = () => {
  return (
    <div
      style={{
        width: "100%",
        padding: "5% 0 ",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "38px"}}>
          Some Features that Made us Unique
        </h1>
        <p style={{ color: "#7777" }}>
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
            <Card sx={{ maxWidth: 500 }}>
      <img
        alt="pic"
        height="300"
        src="https://preview.colorlib.com/theme/robotics/img/b1.jpg.webp"
      />
      <CardContent>
      <Button  variant="contained"  style={{backgroundColor:"#ab92ff",margin:"5px"}}>Travel</Button>
        <Button variant="contained"style={{backgroundColor:"#ab92ff",margin:"5px"}}  >Life style</Button>
        <Typography gutterBottom variant="h5" component="div">
        Portable latest Fashion for young women
        </Typography>
        <Typography variant="body2"style={{ color: "gray" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </Typography>
        <br/>
        <span>31st January, 2018</span>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <Card sx={{ maxWidth: 500 }}>
      <img
        alt="pic"
        height="300"
        src="https://preview.colorlib.com/theme/robotics/img/b2.jpg.webp"
      />
      <CardContent>
      <Button  variant="contained"  style={{backgroundColor:"#ab92ff",margin:"5px"}}>Travel</Button>
        <Button variant="contained"style={{backgroundColor:"#ab92ff",margin:"5px"}}  >Life style</Button>
        <Typography gutterBottom variant="h5" component="div">
        Portable latest Fashion for young women
        </Typography>
        <Typography variant="body2"style={{ color: "gray" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </Typography>
        <br/>
        <span>31st January, 2018</span>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
            </Grid>
       
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default News;
