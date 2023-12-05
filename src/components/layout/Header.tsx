// Dans le composant Header.tsx
import React from "react";
import { Button } from "../../../node_modules/@mui/material/index";

const Header = () => {
  return (
    <header className="aaa">
      <Button
        variant="contained"
        color="primary"
        href="/posts"
        sx={{ margin: "0 10px" }}
      >
        Posts
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="/categories"
        sx={{ margin: "0 10px" }}
      >
        Categories
      </Button>
    </header>
  );
};

export default Header;
