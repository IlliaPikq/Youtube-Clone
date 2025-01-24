import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background: selectedCategory == category.name && "#FC1503",
            color: "white",
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            style={{
              color:
                selectedCategory == category.name && "#FC1503"
                  ? "white"
                  : "red",
              marginRight: "10px",
            }}
          >
            {<category.icon />}
          </span>
          <span
            style={{ opacity: selectedCategory == category.name ? "1" : "0.8" }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
