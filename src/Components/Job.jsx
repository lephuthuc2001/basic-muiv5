import React from "react";
import { Paper } from "@mui/material";
import { Divider } from "@mui/material";
import { Chip, Button } from "@mui/material";
function Job({ title, description, skills }) {
  return (
    <Paper
      sx={{
        height: "350px",
        width: "350px",
        padding: "10px",
        position: "relative",
        backgroundColor: "#212529",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Divider />
      <div
        className="info"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="job-properties"
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {skills.map((skill) => (
            <Chip
              sx={{ backgroundColor: "#962727" }}
              key={Math.random().toString(36).substring(5)}
              label={skill}
            />
          ))}
        </div>
        <p>{description}</p>
        <Button
          sx={{
            position: "absolute",
            bottom: "15px",
            left: "0",
            right: "0",
            width: "fit-content",
            m: "auto",
            backgroundColor: "#f08c00",
            color: "#000000",
          }}
        >
          Learn More
        </Button>
      </div>
    </Paper>
  );
}

export default Job;
