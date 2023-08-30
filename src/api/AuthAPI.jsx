import { signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password) =>{
    try{
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch(err){
        alert(err.errors.message)
    }
};
export const RegisterAPI = async(email, password) => {
    try{
        let response = await createUserWithEmailAndPassword(auth, email, password);
        
    }catch(err){
        return err
    }
}
export const GoogleSignInAPI = (email, password) => {
    try{
        let googleProvider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, googleProvider)
        return res;
    }catch(err){
        return err;
    }
}
export const onLogout = () =>{
    try{
        signOut(auth);
    }
    catch(err){
        return err
    }
}