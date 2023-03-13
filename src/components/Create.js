import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Create() {
    const handleSubmit = event => {

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "fname": fname,
  "lname": lname,
  "username": username,
  "password": "1234",
  "email": "cat.chat@melivecode.com",
  "avatar": "https://www.melivecode.com/users/cat.png"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/users/create", requestOptions)
  .then(response => response.json())
  .then(result => {
    alert(result['message'])
    if(result['status'] === 'ok'){
        window.location.href = '/'
    }
  })
  .catch(error => console.log('error', error));

    }

    const[fname, setFname] = useState('');
    const[lname, setLname] = useState('');
    const[username, setUsername] = useState('');
    

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h6" gutterBottom>
            Create
        </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TextField id="name" label="intent" variant="outlined" fullWidth
                        onChange={(e) => setFname(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField id="calories" label="sub intent" variant="outlined" fullWidth
                        onChange={(e) => setLname(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField id="fat" label="point" variant="outlined" fullWidth
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>Create</Button>
                </Grid>
                <Grid item xs={12}>
                    <Link href="Entities">
                    <Button variant="contained" fullWidth>go back</Button>
                    </Link>
                </Grid>
            </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}