import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      justifyContent: 'center'
    },
    butt:{
      margin: theme.spacing(1)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
  }));

function SecondPage({ data,handleEventSelection,eventid,submitSelection,handleCancel }) {
    const classes = useStyles();
    return(
      <Grid 
        className={classes.root}  
        container
        direction="row"
        justify="center"
        alignItems="center" className={classes.paper} item xs={12}>
          <TextField
            onSubmit={submitSelection}
            select
            id="outlined-full-width"
            label="Select Event"
            style={{ margin: 12 , textAlign: 'left'}}
            value={eventid}
            onChange={handleEventSelection}
            margin="normal"
            fullWidth
            variant="outlined"
            InputLabelProps={{
            shrink: true}}
          >
            {data.map(event => (<MenuItem  key={event["id"]}   value = {event["id"]} >
            {event["name"]["text"]} </MenuItem> ))}
          </TextField>
          <Button   className={classes.butt}  variant="contained" color="secondary" onClick={handleCancel} > Cancel
          </Button>
          <Button   className={classes.butt} variant="contained" color="primary" onClick={submitSelection} > Submit
          </Button>
      </Grid>
    )
}
export default SecondPage;