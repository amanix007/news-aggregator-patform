import TextField from "@mui/material/TextField";

function SearchInput(props) {
  return (
    <TextField
      id="search"
      type="search"
      label="Search"
      variant="outlined"
      fullWidth
      // You can add more props like onChange, value, etc. for functionality
      {...props}
    />
  );
}

export default SearchInput;
