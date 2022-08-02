import React, { useState } from "react";
import { Paper, Grid, Typography } from "@mui/material";

//box hover description length limit
const LIMIT = 140;
function ContentView({ post, boxStyles, imageStyle }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Paper elevation={4} sx={boxStyles}>
      <Grid container style={{ padding: 10 }}>
        <Grid item={true} xs={4}>
          <img
            alt={post.companyName}
            src={`${process.env.REACT_APP_API}/${post.selectedFile}`}
            style={{
              ...imageStyle,
              objectFit: "cover",
              display: isLoaded ? "none" : "block",
            }}
          />
          <img
            alt={post.companyName}
            src={`${process.env.REACT_APP_API}/${post.coverImageOriginal}`}
            onLoad={() => {
              setIsLoaded(true);
            }}
            style={{ ...imageStyle, display: isLoaded ? "block" : "none" }}
          />
        </Grid>
        <Grid item={true} xs={8}>
          <Typography noWrap fontWeight="bold" variant="h5">
            {post.companyName}
          </Typography>
          <div
            style={{
              maxHeight: "100px",
              overflow: "hidden",
            }}
          >
            <Typography>
              {post.desc.length > LIMIT
                ? `${post.desc.substring(0, LIMIT)}...`
                : post.desc.substring(0, LIMIT)}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ContentView;
