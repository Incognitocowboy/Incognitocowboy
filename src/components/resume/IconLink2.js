import React from "react";

function IconLink(props) {
  const { link } = props;
  return <a href={link} target={"_blank"} rel="noopener noreferrer"></a>;
}

export default IconLink;
