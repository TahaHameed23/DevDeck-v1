import React from 'react';
import moment from "moment/moment"
export const getCurrentTimeStamp = (timeFormat) =>{
    return moment().format(timeFormat);
}
export const CurrentTimeStamp = () => {
    return moment().format("llll");      
}