import { useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mypicc from './צילום מסך 2023-12-24 181528.png';
const ToDonate = ({ arr, setArr }) => {
    let [errors, setErrors] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const [showSuccessMessage,setShowSuccessMessage ] = useState(false);
    let [Donate, setDonate] = useState({
        name: "",
        amount: 0,
        dedication: "",
        email: "",
        phone: "",
        creditcard:""

    });


    const notifySuccess = () =>
  toast.success("The donation has been successfully added", {
    bodyClassName: "toast-body-success",
    className: "toast-success",
    
    
  });

    const handelSubmit = (e) => {
        e.preventDefault();
        let result = validate();
        if (Object.keys(result).length == 0) {
            if (!arr.some((object) =>
                Object.keys(object).every((key) => object[key] === Donate[key]))) {
                Donate.dateNow = new Date();
                const updatedArr = [...arr, Donate];
                setArr(updatedArr);
                document.getElementById("one").value = "";
                document.getElementById("two").value = "";
                document.getElementById("three").value = "";
                document.getElementById("four").value = "";
                document.getElementById("five").value = "";
                document.getElementById("six").value = "";
                setErrors("");
                setShowSuccessMessage(true);
                notifySuccess();
                
      setTimeout(() => {
        setShowSuccessMessage(false);

      }, 3000);

            }
            console.log(arr);
        }
        else
            setErrors(result);
        setIsClicked(true);
    }


    const validate = () => {
        let err = {};
        if (!Donate.name)
            err.name = "שם הוא שדה חובה";
        if (!Donate.amount||Donate.amount<1)
            err.amount = "סכום לא תקין";
        if (!Donate.dedication)
            err.dedication = "הקדשה הוא שדה חובה";
        return err;

    };
    const change = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let copy = { ...Donate, [inputName]: inputValue };
        setDonate(copy);

    };


    return (<div>
        
        <div className="container" style={{backgroundColor:"white",boxShadow:"0px 0px 10px rgba(125, 120, 120, 0.2)", width:"800px",height:"600px",marginLeft:"380px",border:"1.5px solid #d73535"}} >
            <form onSubmit={handelSubmit}>
                <img src={mypicc} style={{borderRadius:"15px",marginBottom:"40px",marginLeft:"150px",border:"4px solid pink",marginTop:"-30px"}}></img>
                <div className="group" >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                       
                        <TextField
                            name="name"
                            label="name"
                            id="one"
                            onChange={change}
                            helperText={errors.name}
                            
                        />
                        <TextField
                            name="amount"
                            label="amount"
                            id="two"
                            onChange={change}
                            helperText={errors.amount}
                        />
                        <br />
                        <br />
                        <br />
                        
            
                        <TextField
                            name="dedication"
                            label="dedication"
                            id="three"
                            onChange={change}
                            helperText={errors.dedication}
                        />
                      
                       
                        <TextField
                            name="email"
                            label="email"
                            id="four"
                            onChange={change}
                        />
                        <br />
                        <br />
                        <br />
                       
                        <TextField
                            name="phone"
                            label="phone"
                            id="five"
                            onChange={change}
                        />
                        <TextField
                            name="creditCard"
                            label="creditCard"
                            id="six"
                            onChange={change}
                        />
                        <br />
                        <br />
                        <br />
                       
                    </Box>
                </div>
                <div className="card">
                    <Button label="Submit" variant="outlined" onClick={handelSubmit} sx={{ width: "32ch" }}>donate</Button>
                </div>
                
            </form>
            <div className="showSuccessMessage">
        {showSuccessMessage && (    
         <ToastContainer />
        )}
        </div>
        </div>
    </div>

    );
}

export default ToDonate;










// const Donates = (props) => {
//     const { handleSubmit, register, reset } = useForm();
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
//     const notifySuccess = () =>
//     toast.success("The donation has been successfully added", {
//       bodyClassName: "toast-body-success",
//       className: "toast-success",
//     });
    
//     const [myContributions, setMyContributions] = useState({
//       name: "",
//       donationAmount: 0,
//       deditation: "",
//       date: new Date(),
//     });
//     const [myErrors, setMyErrors] = useState({
//       name: "",
//       donationAmount: "",
//     });
  
  
  
//     const change = (e) => {
//       const inputValue = e.target.value;
//       const inputName = e.target.name;
//       setMyContributions((prev) => ({ ...prev, [inputName]: inputValue }));
//       validate(); // בכל שינוי בתיבת הטקסט, תבצע בדיקת התקינות
//     };
  
//     const validate = () => {
//       let err = {};
//       if (!myContributions.name) err.name = "Name is a required field";
//       if (!myContributions.donationAmount) err.donationAmount = "What is the amount";
//       setMyErrors(err);
//       return err;
//     };
  
//     const save = () => {
//       const errors = validate();
//       if (Object.keys(errors).length === 0) {
//         const contribution = { ...myContributions };
//         props.addContribution(contribution);
//         console.log(contribution);
//         setMyContributions({
//           name: "",
//           donationAmount: 0,
//           deditation: "",
//           date: new Date(),
//         });
//         reset();
  
//         setShowSuccessMessage(true);
//         notifySuccess();
//         setTimeout(() => {
//           setShowSuccessMessage(false);
  
//         }, 3000);
//       } else {
//         setShowSuccessMessage(false);
//         setMyErrors(errors);
        
//       }
//     };
//     return (
//       <>
//         <form className="formDonates" onSubmit={handleSubmit(save)}>
//           <div className="textFild"></div>
//           <div className="formInputs">
//             <ThemeProvider theme={theme}>
//               <TextField
//                 id="outlined-basic"
//                 label="Name:"
//                 variant="outlined"
//                 {...register("name")}
//                 onBlur={change}
//                 onChange={change}
//               />
//               {myErrors.name ? (
//                 <span className="error-message"> {myErrors.name}</span>
//               ) : null}
//             </ThemeProvider>
//           </div>
//           <div className="formInputs">
//             <ThemeProvider theme={theme}>
//               <TextField
//                 id="outlined-basic"
//                 label="Amouunt for donation:"
//                 variant="outlined"
//                 {...register("donationAmount")}
//                 className="input"
//                 onBlur={change}
//                 onChange={change}
//               />
//               {myErrors.donationAmount ? (
//                 <span className="error-message">{myErrors.donationAmount}</span>
//               ) : null}
//             </ThemeProvider>
//           </div>
//           <div className="formInputs">
//             <ThemeProvider theme={theme}>
//               <TextField
//                 id="outlined-basic"
//                 label="Do you whant to add a deditetion:"
//                 variant="outlined"
//                 {...register("deditation")}
//                 className="input"
//                 onBlur={change}
//                 onChange={change}
//               />
//             </ThemeProvider>
//           </div>
//           <div className="submitButton">
//             <Button
//               type="submit"
//               value="send"
//               variant="contained"
//             >
//               Send
//             </Button>
//           </div>
//         </form>
//         <div className="showSuccessMessage">
//         {showSuccessMessage && (
          
//          <ToastContainer />
//         )}
//         </div>
//       </>
//     );
//   };
  
//   export default Donates;


  




