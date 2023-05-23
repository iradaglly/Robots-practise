import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/system";
import { deleteRobotByID, getAllRobots } from "../api/requests";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const RobotCards = () => {
  const [robots, setRobots] = useState();
  useEffect(() => {
    getAllRobots().then((res) => {
      setRobots(res);
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "5% 0 ",
        backgroundColor: "#f9f9ff",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "38px" }}>Featured Robotics Products to Show</h1>
        <p style={{ color: "#777777" }}>
          Who are in extremely love with eco friendly system.
        </p>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={2}>
            {robots &&
              robots.map((elem) => (
                <Grid key={elem.title} item xs={12} md={6} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 250,
                      padding: "20px",
                      backgroundColor: "#f9f9ff",
                    }}
                  >
                    <CardActionArea>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img height="200" src={elem.image} alt="employers" />
                      </div>

                      <CardContent style={{ textAlign: "center" }}>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          style={{ fontWeight: "bold" }}
                        >
                          {elem.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          style={{
                            marginTop: "20px",
                            color: "#777777",
                            fontSize: "15px",
                            fontWeight: "300",
                            lineHeight: "1.625em",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {elem.desc}
                        </Typography>
                        <Button
                          style={{
                            marginTop: "15px",
                            color: "black",
                            backgroundColor: "white",
                          }}
                          variant="contained"
                        >
                          <Link  style={{textDecoration:"none",color:"black"}} to={`/robots/${elem._id}`}>VIEW DETAIL</Link>
                        </Button>
                        <Button
                          style={{ marginTop: "10px" }}
                          variant="outlined"
                          color="error"
                          onClick={() => {
                            Swal.fire({
                              title: "Are you sure?",
                              text: "You won't be able to revert this!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#3085d6",
                              cancelButtonColor: "#d33",
                              confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                deleteRobotByID(elem._id).then((res) => {
                                  Swal.fire(
                                    `${elem.title} Deleted!`,
                                    "Item has been deleted.",
                                    "success"
                                  );
                                });
                                setRobots(
                                  robots.filter((x) => x._id !== elem._id)
                                );
                              }
                            });
                          }}
                        >
                          Delete
                        </Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default RobotCards;
