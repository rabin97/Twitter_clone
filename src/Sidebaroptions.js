import React from "react";
import  "./Sidebarop.css"
// import HomeIcon from '@mui/icons-material/Home';
function Sidebaroptions(props) {
  return (
    <div className="sidebaroptions">
         <props.Icon/>
      <h3>{props.text}</h3>
     
    </div>
  );
}

export default Sidebaroptions;
