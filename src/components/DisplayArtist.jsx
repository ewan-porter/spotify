import React from "react";
import { Grid, Container, Typography, styled, Box, Paper } from "@mui/material";
import DisplayShows from "./DisplayShows";
import { useEffect, useState } from "react";

const DisplayArtist = (props) => {
   


const { artists } = props;

const [count, setCount] = useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= artists.length) {
        clearInterval(interval);
      } else {
        setCount(count => count + 1);
        counter++; // local variable that this closure will see
      }
    }, 500);
    return () => clearInterval(interval); 
  },);

  return (
    <>
      <Container maxWidth="xl" sx={{marginTop: "2%"}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={8}>
            {artists.slice(0, count).map((index) => (
              <Grid item xs={2} key={index.id}>
                <Item>
                  <Typography variant="h5" align="center">
                    {index.name}
                  </Typography>
                  
                  {/* <DisplayShows 
                  artist={index.name}
                  
                  /> */}
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
