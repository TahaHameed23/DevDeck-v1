import { useNavigate } from 'react-router-dom';

let instance = useNavigate();

export const navigate = (params) =>{
    instance(params);
}