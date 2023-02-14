import React from "react";
// import IconLink from "./IconLink";
import { Box } from "@mui/material";

function ResumeBlock(props) {
  const { image } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"5px"}
    >
      <Box
        borderRadius={"35px"}
        margin={"auto"}
        component={"img"}
        src={image}
        alt={"mockup"}
      />
    </Box>
  );
}

export default ResumeBlock;
