
import TextField from "@mui/material/TextField";

function SearchInput() {
  return (
    <TextField
      id="search"
      label="Search"
      variant="outlined"
      fullWidth
      // You can add more props like onChange, value, etc. for functionality
    />
  );
}

export default SearchInput;
