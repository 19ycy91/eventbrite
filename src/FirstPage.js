import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      justifyContent: 'center'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
  }));

function FirstPage({ handlekeydown, handleTextChange,handleResult }) {
    const classes = useStyles();

    return(
      <Grid 
        className={classes.root}  
        container
        direction="row"
        justify="center"
        alignItems="center" 
        className={classes.paper} 
        item 
        xs={12}>

        <TextField
          onKeyDown={handlekeydown} 
          onChange={handleTextChange}
          id="outlined-full-width"
          label="Eventbrite Private API Key"
          style={{ margin: 12 , textAlign: 'center'}}
          placeholder="Private API Key"
          margin="normal"
          fullWidth
          variant="outlined"
          InputLabelProps={{
          shrink: true
          }}
        />
          <Button  variant="contained" color="primary" onClick={handleResult} > Verify Token
          </Button>
      </Grid>
    )
}
export default FirstPage;