import React from "react";
import ResumeBlock from "./ResumeBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import { PropaneSharp } from "@mui/icons-material";
// import "../../img/MyResume.pdf";

export default function Resume(props) {
  return (
    <Box sx={{backgroundColor: props.darkMode ? "#1f1f1f" : "#f8f8f8"}}>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.resume.map((resume, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ResumeBlock image={resume.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
