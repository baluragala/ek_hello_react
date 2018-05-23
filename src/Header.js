import React from "react";

function Header({ title, subTitle }) {
  console.log("rendering header");
  return (
    <header>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
    </header>
  );
}

export default Header;
