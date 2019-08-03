import React from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  butt:{
    margin: theme.spacing(1)
  }
}));

function ThirdPage({ datafeed, handleBack}) {
  const classes = useStyles();
    let data=datafeed.map(attendee => {
        return( { "name": attendee.profile.name , "email": attendee.profile.email, "tickettype": attendee.ticket_class_name, "ticketprice": attendee.costs.base_price.display})
     } )
    return(
      <div>
        <MaterialTable
        title="Attendee List"
        columns={[
            
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Ticket Type', field: 'tickettype', type: 'numeric' },
          { title: 'Ticket Price', field: 'ticketprice', type: 'numeric'}
        ]}
        data = {data}
     
        options={{
          filtering: true,
          selection: true,
          exportButton: true
        }}
      />
      
      <Button  className={classes.butt} variant="contained" color="secondary" onClick={handleBack} > Back
        </Button>
   
      </div>
    )
}
export default ThirdPage;