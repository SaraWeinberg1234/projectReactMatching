import Donation from "./Donation";
import ToDonate from "./ToDonate";
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './Contain.css';
import mynavpic from './צילום מסך 2023-12-24 170506.png';
import goal from './עדינה טהלר צילום 0583280503 (6).jpg';
const Contain = ({ arr, setArr }) => {
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
  const donationPercentage = calculateDonationPercentage(arr);


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
  const PrettoSlider = styled(Slider)({
    color: '#ef5350',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#ef5350',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: '#ef5350',
      color: "white",
      padding: 0,
      width: 38,
      height: 38,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#ef5350',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });
  return (<>
    <img src={mynavpic} style={{ width: "100%" }}></img>
    <div className="containerImage">
      <div className="image">
        <img src={goal}
          style={{ height: "500px", width: "750px", marginLeft: "600px", marginTop: "8px", borderRadius: "20px" }}></img>
      </div>
      <div className="allBoxes">
        <div class="containerBox">

          <div class="box1">
            <div className="oneBox">
              ₪{calculateDonationAmount(arr)}
            </div>
            <span>תרומות עד כה</span>
          </div>
          <div class="box1">
            <div className="oneBox">
              {calculateDonationPercentage(arr).toFixed(2)}%
            </div>
            <span>אחוז התרומות</span>
          </div>
        </div>
        <div class="containerBox">
          <div class="box1">
            <div className="oneBox">
              {calculationAmountOfDonors(arr)}
            </div>
            <span>כמות תורמים</span>
          </div>
          <div class="box1">
            <div className="oneBox">
              ₪1000000
            </div>
            <span>יעד הקמפיין</span>
          </div>
        </div>
      </div>



      <Box sx={{ width: 320, marginLeft: "200px", marginTop: "30px", color: "#ef5350" }}>

        <Box sx={{ m: 3 }} />
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={0}
          value={donationPercentage.toFixed(2)}
        />

      </Box>
      <div className="containerBox">
        <div class="box1">
          <div className="status1" >
            ₪{calculateDonationAmount(arr)}
          </div>
          <span>הסכום המושג בפועל</span>
        </div>
        <div class="box1">
          <div className="status2">
            ₪1000000
          </div>
          <span>יעד הקמפיין</span>
        </div>
      </div>
      <div style={{ width: "100%", height: "60px", marginTop: "200px", backgroundColor: "pink" }}></div>
      <div style={{ fontSize: "xx-large", color: "#d73535", marginTop: "-55px", textAlign: "center" }}>תרום</div>
      <div className="donate" style={{ marginTop: "100px" }} >
        <ToDonate arr={arr} setArr={setArr} />
      </div>
    </div>
    <div style={{ width: "100%", height: "60px", backgroundColor: "pink", marginTop: "80px" }}></div>
    <div style={{ fontSize: "xx-large", color: "#d73535", textAlign: "center", marginTop: "-55px" }}>תרומות</div>

    <div className="framedonation" style={{ marginTop: "100px", marginLeft: "-100px" }}>
      <Donation arr={arr} setArr={setArr} className="left-component" />
    </div>
  </>);
}

export default Contain;












