import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import "./Hero.css";

function Hero({ title, subTitle }) {
  return (
    <div className="hero-image">
      <Container maxWidth="xl">
        <div className="hero-text">
          <Stack>
            <Typography
              variant="h3"
              fontSize={36}
              fontFamily="inherit"
              fontWeight="bold"
            >
              {title}
            </Typography>
            <Typography variant="subtitle2" fontFamily="inherit" fontSize={20}>
              {subTitle}
            </Typography>
            {/* <Typography
              variant="subtitle1"
              fontSize={20}
              fontWeight="bold"
              color="#FF7B00"
              fontFamily="inherit"
            >
              1.000.000 pixels&emsp;1.000 VND/pixel
            </Typography> */}
          </Stack>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
