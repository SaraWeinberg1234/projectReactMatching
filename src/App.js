import './App.css';
import { Routes, Route } from 'react-router-dom';
import Donation from './Donation';
import ToDonate from './ToDonate';
import { ThemeContext } from './Contexts';
import { useState } from 'react';
import SeeDonation from './seeDonation';
import AppImage from './AppImage';
import { ColorModeContext } from './ToggleColorMode';
import ToggleColorMode from './ToggleColorMode';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import Contain from './Contain';
import mypic2 from './צילום מסך 2023-12-24 161235.png';
function App() {
  let [theme1, setTheme1] = useState('pink');
  const changeTheme = (color) => {
    setTheme1(color)
  }
  let [arr, setArr] = useState([
    { name: "ברכי שכטר", amount: "2300", dedication: "לעילוי נשמת רואי ראובן בן אורנית וגבריאל ולרפואת רון ראובן ינון בן ניצה ולרפואת כל חולי עם ישראל!", email: "", phone: "", dateNow: "" },
    { name: "שמעון יוסף", amount: "100000", dedication: "לרפואת כל חולמי עמו ישראל והצלחה בפרנסה,זיווג, משפחה, וכל הברכות שיש בתורה ❤️", email: "", phone: "", dateNow: "" },
    { name: "חיים מושקוביץ", amount: "11500", dedication: "❤️לזכות צפורה בת שבע בת אילנה לזיוג הגון במהרה לזכות יוסף חיים בן אילנה לזיוג הגונה", email: "", phone: "", dateNow: "" },
    { name: "יוסי גינצבורג", amount: "569", dedication: "לזכות משפחת גרנשטט היקרה בהצלחה בשליחות", email: "", phone: "", dateNow: "" },
    { name: "גילה פרובר", amount: "12300", dedication: "❤️לעילוי נשמת שלמה בן רחל בן חמו", email: "", phone: "", dateNow: "" },
    { name: "אריאל שרון", amount: "11998", dedication: "עבור פינת קפה לעילוי נשמת ר׳ ישראל ואסתר מנדרובסקי.", email: "", phone: "", dateNow: "" },
    { name: "הדס פרץ", amount: "5630", dedication: "לעילוי נשמת שלמה בן רחל בן חמו", email: "", phone: "", dateNow: "" }
  ]);
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#ef5350' : '#ebebeb',
          },
          background: {
            default: mode === 'light' ? 'white' : '#424242',
          },
        },
      }),
    [mode]
  );


  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Stack sx={{ width: "100%", color: theme.palette.text.primary, bgcolor: theme.palette.background.default }} >
            <ThemeContext.Provider value={{ colorValue: theme1, changeColorValue: changeTheme }}>
              <Routes>
                <Route path="Donation" element={<Donation arr={arr} setArr={setArr} />}>
                </Route>
                <Route path="ToDonate" element={<ToDonate arr={arr} setArr={setArr} />}></Route>
                <Route path="/" element={<AppImage />}></Route>
                <Route path="SeeDonation" element={<SeeDonation arr={arr} setArr={setArr} />}></Route>
                <Route path="Contain" element={<Contain arr={arr} setArr={setArr} />}></Route>
              </Routes>
            </ThemeContext.Provider>
            <ToggleColorMode />
          </Stack>
        </ThemeProvider>
      </ColorModeContext.Provider>
      <img src={mypic2} style={{ width: "100%" }}></img>
    </>
  );
}

export default App;



