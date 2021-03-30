import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import ComponenteMio from './ComponenteMio'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function App() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [hayErrores, setHayErrores] = useState(false)

  const handleOpen = () => {
    setMostrarModal(true);
  };

  const handleClose = () => {
    setMostrarModal(false);
  };

  console.log(mostrarModal)

  const handleChange = (e) => {
    
    if (e.target.value === "pepo") {
      setHayErrores(true)
    }
  }

  return (
    <div className="App">

  
  <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={mostrarModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Grid spacing={4} container direction="column">
        <Grid item>
          <Button variant="outlined" color="secondary">
            Cancelar compra
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Comprar
          </Button>
        </Grid>
      </Grid>

      <Box m={4}>
        <TextField 
        onChange={handleChange}
          id="standard-basic" 
          label="Standard" 
          error={hayErrores}
          helperText={hayErrores && "No nos gusta Pepo"}
          />


      </Box>

      
    </div>
  );
}

export default App;
