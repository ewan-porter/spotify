import React from "react";
import { Grid, Container, Typography, styled, Box, Paper } from "@mui/material";
import DisplayShows from "./DisplayShows";

const DisplayArtist = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  return (
    <>
      <Container maxWidth="xl" sx={{marginTop: "2%"}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={8}>
            {props.artists.map((index) => (
              <Grid item xs={2} key={index.id}>
                <Item>
                  <Typography variant="h5" align="center">
                    {index.name}
                  </Typography>
                  <DisplayShows 
                  artist={index.name}
                  
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default DisplayArtist;
