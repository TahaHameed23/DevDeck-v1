import { useNavigate } from 'react-router-dom';
import React from 'react';
let instance = useNavigate();

export const navigate = (params) =>{
    instance(params);
}