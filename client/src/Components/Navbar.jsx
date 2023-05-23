import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#959bff",position:"fixed",zIndex:999 }}>
        <Container>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src="https://preview.colorlib.com/theme/robotics/img/logo.png.webp"
                alt="logo"
              />
            </div>
            <div>
              <Button color="inherit">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  to="/"
                >
                  HOME
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  to="/add"
                >
                  {" "}
                  ADD
                </Link>
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
