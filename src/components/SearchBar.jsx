import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const searchInput = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput) {
      navigate("/search/" + searchInput.current.value);

      searchInput.current.value = "";
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        ref={searchInput}
      />
      <IconButton sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
