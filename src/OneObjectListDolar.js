import "./Donation";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const OneObjectListDolar = (props) => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const fromCurrency = 'ILS'; // The currency you are converting from
  const toCurrency = 'USD'; // The currency you are converting to

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "http://data.fixer.io/api/latest?access_key=c9542b52cd4c7f545f5b5eb2b7c4fb7d"
        );
        setExchangeRate(response.data.rates);
      } catch (error) {
        setExchangeRate(3.8);
        console.error('Error fetching exchange rates:', error);
        console.log(exchangeRate);
      }
    };
    fetchExchangeRates();
  }, []);




  
  const changeToDolar = (myamount) => {
    if (exchangeRate && exchangeRate[toCurrency] && exchangeRate[fromCurrency]) {
      const convertedValue = myamount * (exchangeRate[toCurrency] / exchangeRate[fromCurrency]);
      const convertedAmount = convertedValue.toFixed(2);
      return convertedAmount;
    } else {
      console.error('Exchange rate data is not available');
      return (myamount/3.8).toFixed(2);
    }
  };
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14, color: "#e03a3a" }} color="text.secondary" gutterBottom>
          {new Date().toDateString()}
        </Typography>
        <Typography variant="h5" sx={{ mb: 1.5, color: "pink" }} color="text.secondary">
          <br />
          {props.MyItem.name} {changeToDolar(props.MyItem.amount)}$
        </Typography>
        <Typography variant="h8" sx={{ mb: 1.5 }} color="text.secondary">
          {props.MyItem.dedication}
          <br />
          <br />
        </Typography>
        <Typography variant="h10" sx={{ mb: 1.5 }} color="text.secondary">
          עברו {props.MyItem.dateNow != "" ? new Date().getDay() - props.MyItem.dateNow.getDay() : "3"} ימים מאז התרומה
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

export default OneObjectListDolar;