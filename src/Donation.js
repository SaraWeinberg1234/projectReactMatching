import { useState } from "react";
import { useEffect } from "react";
import OneObjectList from "./OneObjectList";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./Donation.css";
import * as React from 'react';
import OneObjectListDolar from "./OneObjectListDolar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Donation = ({ arr, setArr }) => {
  const [checkbox, setCheckbox] = useState(false);
  const donationsArr = [...arr];
  const [filteredDonationsArr, setFilteredDonationsArr] = useState([]);
  //האם מבוצע חיפוש
  const [isSearching, setIsSearching] = useState(false);
  //הערך שנכתב בתיבת החיפוש
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (isSearching) {
      setFilteredDonationsArr(
        donationsArr.filter((item) => item.name.includes(searchValue) || item.dedication.includes(searchValue))
      );
    } else {
      setFilteredDonationsArr(donationsArr);
    }
  }, [donationsArr, isSearching, searchValue]);// הפונקציה תתבצע בעת שינוי באחד השתנים הבאים




  const searchByName = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);//useEffect מופעל כעת
    setIsSearching(searchValue !== "");//true אם מתקיים החיפוש משנה לערך בוליאני 
  };



  const sorted = (e) => {
    const sortWay = e.target.value;
    if (sortWay === "sum") {
      const sortedArr = [...donationsArr].sort((a, b) => b.amount - a.amount);
      setArr(sortedArr);
    } else if (sortWay === "newD") {
      const sortedArr = [...donationsArr].sort((a, b) => new Date(b.dateNow) - new Date(a.dateNow));
      setArr(sortedArr);
    } else if (sortWay === "oldD") {
      const sortedArr = [...donationsArr].sort((a, b) => new Date(a.dateNow) - new Date(b.dateNow));
      setArr(sortedArr);
    }
  };

  return (<>

    <body>

      <div className="sortAndsearch">
        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginLeft: "500px" }} >
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, direction: "rtl" }} />
          <TextField id="input-with-sx" label="חפש" variant="standard" onChange={searchByName} />
        </Box>
        <FormControl variant="standard" sx={{ m: 1, width: "200px", marginRight: "300px", marginBottom: "-1px" }}>
          <InputLabel id="demo-simple-select-standard-label">סדר לפי</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            onChange={sorted}
            label="Age"
          >
            <MenuItem value="sum">גובה תרומה</MenuItem>
            <MenuItem value="newD">חדש</MenuItem>
            <MenuItem value="oldD">ישן</MenuItem>
          </Select>
        </FormControl>
        <label htmlFor="myCheckbox" className="button1">
          <input type="checkbox" id="myCheckbox" onChange={(event) => setCheckbox(event.target.checked)} />
          <span>$</span>
        </label>
      </div>
      <div className="containerDonation">
        <div className="boxdonation">
          {filteredDonationsArr.length > 0 && checkbox ? (
           filteredDonationsArr.map((item, index) => (
              <div key={index}>
                <OneObjectListDolar MyItem={item} />

              </div>
            ))
          ) : filteredDonationsArr.length > 0 && !checkbox ? (
            filteredDonationsArr.map((item, index) => (
              <div key={index}>
                <OneObjectList MyItem={item} />
              </div>
            ))
          ) : (
            <div className="sorry-message">
              {isSearching ? "מצטערים, אין תורם כזה" : null}
            </div>
          )}
        </div>
      </div>
    </body>
    <div>
    </div>
  </>

  );


}

export default Donation;




