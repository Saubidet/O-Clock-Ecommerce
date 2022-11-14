import React from "react";
import "./CategoryContainer.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function CategoryContainer() {
  return (
    <div className="category-container">
      <Link to="/categorias/Mujer" className="category-button">
        <Button variant="contained">Relojes Mujer</Button>
      </Link>
      <Link to="/categorias/Hombre" className="category-button">
        <Button variant="contained">Relojes Hombre</Button>
      </Link>
      <Link to="/categorias/Smart" className="category-button">
        <Button variant="contained">Relojes Smart</Button>
      </Link>
    </div>
  );
}

export default CategoryContainer;