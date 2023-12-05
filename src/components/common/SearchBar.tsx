import React, { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const PostSearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div>
      <TextField
        label="Rechercher un post"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default PostSearchBar;
