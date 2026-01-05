import React, { Component } from 'react';
import Snowfall from "react-snowfall";



function Snow() {
          const currentmonth = new Date().getMonth();
          const isSnowing = currentmonth === 11 || currentmonth === 0 || currentmonth === 1; //in den Wintermonaten Dezember, Januar, Februar
        
    
        return (
            <>
            {isSnowing && <Snowfall />}
            </>
        );
    }

 
export default Snow;