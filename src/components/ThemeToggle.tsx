import { useContext } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {dark ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
