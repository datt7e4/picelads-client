import React, { useState } from "react";
import { Grid, IconButton, Typography, Box } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import { BACKGROUND_COLOR } from "../../constants/data";
import { outline, viewContainer } from "../sharedStyles/modalOutline";

function ModalView({ post, handleClose }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box sx={outline}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        // style={{ float: "right" }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <Box sx={viewContainer}>
        <Grid container>
          <Grid item={true} xs={12}>
            <img
              alt={post.companyName}
              src={`${process.env.REACT_APP_API}/${post.selectedFile}`}
              style={{
                height: "400px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                display: isLoaded ? "none" : "block",
              }}
            />
            <img
              className="img-view"
              alt={post.companyName}
              src={`${process.env.REACT_APP_API}/${post.coverImageOriginal}`}
              onLoad={() => {
                setIsLoaded(true);
              }}
              style={{
                height: "400px",
                width: "100%",
                borderRadius: "10px",
                objectFit: "contain",
                background: BACKGROUND_COLOR,
                display: isLoaded ? "block" : "none",
              }}
            />
          </Grid>
          <Grid item={true} xs={12} style={{ padding: 20 }}>
            <div className="title">
              <Typography fontWeight="bold" variant="h5">
                {post.companyName}
              </Typography>
              {post.companyLink && (
                <IconButton
                  target="_blank"
                  color="primary"
                  size="small"
                  href={`${post.companyLink}`}
                >
                  <LinkIcon fontSize="large" />
                </IconButton>
              )}
            </div>
            {post.companyPhone && (
              <div className="phone-flex">
                <IconButton size="small" href={`tel:${post.companyPhone}`}>
                  <PhoneIcon />
                </IconButton>
                <Typography fontSize={14}>{post.companyPhone}</Typography>
              </div>
            )}
            <Typography
              // line break for description view
              sx={{ whiteSpace: "pre-line" }}
              marginTop={2}
              variant="body1"
              component="h2"
            >
              {post.desc}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ModalView;
