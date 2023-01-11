import "./App.css";
import SearchAppBar from "./Components/SearchAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import JobLists from "./Components/JobLists";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { jobsListLength } from "./Components/JobLists";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchAppBar />
        <JobLists pageNum={page} />
        <Pagination
          defaultPage={page}
          onChange={handleChange}
          count={Math.ceil(jobsListLength / 6)}
          color="primary"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
