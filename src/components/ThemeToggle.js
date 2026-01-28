import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from 'react-bootstrap/Button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button style={{
        backgroundColor: theme === "light" ? "#52b189" : "#32e299",
        border: "none"
      }} onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}