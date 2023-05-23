import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Container } from "@mui/system";
import { getRobotByID } from "../api/requests";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const [robots, setRobots] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getRobotByID(id).then((res) => {
      setRobots(res);
    });
  }, [id]);
  return (
    <div style={{ padding: "100px 0" }}>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <Container style={{ paddingTop: "5%" }}>
          <Grid container spacing={2}>
            <Grid key={robots.title} item xs={12} md={6} lg={3}>
              <Card
                sx={{
                  maxWidth: 250,
                  padding: "20px",
                  backgroundColor: "#f9f9ff",
                }}
              >
                <CardActionArea>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img height="200" src={robots.image} alt="employers" />
                  </div>

                  <CardContent style={{ textAlign: "center" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      style={{ fontWeight: "bold" }}
                    >
                      {robots.title}
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
                      {robots.desc}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      backgroundColor: "#b491ff",
                    }}
                   
                  >
                    <Link
                     to={`/robots/edit/${robots._id}`}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      EDIT
                    </Link>
                  </Button>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default DetailPage;
