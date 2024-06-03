import "./Donation";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
const OneObjectList = (props) => {
  const card = (
    <React.Fragment>
      <CardContent sx={{ backgroundColor: "white" }}>
        <Typography sx={{ fontSize: 14, color: "#e03a3a" }} color="text.secondary" gutterBottom>
          {new Date().toDateString()}
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5, color: "pink" }} color="text.secondary">
          <br />
          {props.MyItem.name} ₪{props.MyItem.amount}
        </Typography>
        <Typography variant="h8" sx={{ mb: 1.5 }} color="text.secondary">
          {props.MyItem.dedication}
          <br />
          <br />
        </Typography>
        <Typography variant="h10" sx={{ mb: 1.5 }} color="text.secondary">
          עברו {props.MyItem.dateNow != "" ? new Date().getMinutes() - props.MyItem.dateNow.getMinutes() : "3"} דקות מאז התרומה
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (<>
    <div className="contributors-list-one">
      <div className="details">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </div>
    </div>
  </>);
}

export default OneObjectList;