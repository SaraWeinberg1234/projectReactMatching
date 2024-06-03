import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "./Contexts";
import ChooseColor from "./ChooseColor";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import mynavpic from './צילום מסך 2023-12-24 170506.png';
const SeeDonation = ({ arr, setArr }) => {
  const arrDonates = [...arr];
  const color = useContext(ThemeContext);
  const calculateDonationPercentage = (arrDonates) => {
    if (!arrDonates || arrDonates.length === 0) {
      return 0;
    }
    let totalAmount = 0;
    arrDonates.forEach((donate) => {
      totalAmount += parseInt(donate.amount);
    });
    const percentage = (totalAmount / 1000000) * 100;
    return percentage;
  };
  const calculateDonationAmount = (arrDonates) => {
    if (!arrDonates || arrDonates.length === 0) {
      return 0;
    }
    let totalAmount = 0;
    arrDonates.forEach((donate) => {
      totalAmount += parseInt(donate.amount);
    });
    return totalAmount;
  }
  const calculationAmountOfDonors = (arrDonates) => {
    let amountOfDonors = arrDonates.length;
    return amountOfDonors;
  }
  return (<><img src={mynavpic} style={{ width: "100%" }}></img>
    <img src='https://upload.wikimedia.org/wikipedia/he/thumb/c/c8/EzerMezion.svg/472px-EzerMezion.svg.png?20180817111524' style={{ height: "500px", width: "500px", marginLeft: "900px" }} />
    <div style={{ backgroundColor: color.colorValue, width: "40%", marginTop: "-350px", marginLeft: "70px", borderRadius: "10px", border: "1px solid #e03a3a" }}>
      <React.Fragment>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          </Typography>
          <Typography variant="h5" component="div" sx={{ color: "#e03a3a" }}>
            May you always be one of the donors
          </Typography>
          <Typography variant="h5" sx={{ mb: 1.5 }} color="text.secondary">
            <br />
            סכום של התרומות עד כה:{calculateDonationAmount(arrDonates)}
            <br />
            סכום היעד הוא:1000000
            <br />
            אחוז התרומות עד כה:{calculateDonationPercentage(arrDonates).toFixed(2)}
          </Typography>
          כמות התורמים :{calculationAmountOfDonors(arrDonates)}
        </CardContent>
      </React.Fragment>
    </div>
    <div style={{ marginLeft: "335px" }}> <ChooseColor /></div>
  </>);

}

export default SeeDonation;