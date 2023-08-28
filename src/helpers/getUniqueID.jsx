import uuid from 'react-uuid'
export const getUID = () => {
    let uid = uuid();
    return uid;
}
