import React from "react";
import { Container } from "@mui/system";
import style from "./style.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div
      className={style.footer}
      style={{
        width: "100%",
        padding: "120px 0",
        bottom: 0,
      }}
    >
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3} md={3} lg={3}>
              <h3 style={{ color: "white" }}>Top Products</h3>
              <ul style={{ padding: "0" }}>
                <li style={{ color: "white", listStyle: "none" }}>
                  Managed Website
                </li>
                <li style={{ color: "white", listStyle: "none" }}>
                  Managed Reputation
                </li>
                <li style={{ color: "white", listStyle: "none" }}>
                  Power Tools
                </li>
                <li style={{ color: "white", listStyle: "none" }}>
                  Marketing Service
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <h3 style={{ color: "white" }}>Newsletter</h3>
              <span style={{ color: "white", fontWeight: "300" }}>
                You can trust us. we only send promo offers, not a single spam.
              </span>
              <input
                type="text"
                placeholder="Enter Email"
                style={{
                  width: "300px",
                  height: "30px",
                  borderRadius: "30px",
                  margin: "3% 0",
                  fontSize: "15px",
                }}
              />
              <Button
                variant="contained"
                style={{
                  marginLeft: "20px",
                  borderRadius: "20px",
                  backgroundColor: "#ca95ff",
                }}
              >
                SUBSCRIBE
              </Button>
            </Grid>
            <Grid item xs={3} md={3} lg={3}>
              <h3 style={{ color: "white" }}>Instagram Feed</h3>
            </Grid>
            <Grid item xs={8} md={8} lg={8}>
              <span style={{ color: "white", fontWeight: "300" }}>
                Copyright ©2023 All rights reserved This template is made with
                by Colorlib
              </span>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
