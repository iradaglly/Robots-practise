import React from "react";
import style from "./home.module.css";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';


const HeroSection = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display:"flex",
        alignItems:"center"
      }}
      className={style.home}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={6}>
            <h1
            style={{
                fontSize:"60px",
                color:"white",
                fontWeight:'400',
                margin:"0",
            }}>Improved <br/>Production level<br/> with Robotics</h1>
            <span
             style={{
                fontSize:"15px",
        
                color:"white",
                fontWeight:'400'
            }}
            >EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</span>
            <Button style={{
                display:"block",
                marginTop:"15px",
                color:"black",
                backgroundColor:"white"
            }} variant="contained">VIEW DETAILS</Button>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <div style={{width:"500px",height:"400px"}} className={style.robot}>

            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSection;
