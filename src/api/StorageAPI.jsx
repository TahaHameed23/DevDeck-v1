import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { editProfile } from "./FirestoreAPI";


export const uploadImage = (file, id, setModalOpen, setProgress, setLoading,setCurrentImage) =>{
    const profileImageRef = ref(storage,`$profileImages/${file.name}`)
    const uploadTask = uploadBytesResumable(profileImageRef, file)
    uploadTask.on('state_changed',
     (snapshot) => {
        const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes)*100
    
        );
        setProgress(progress)
    },
    (error) => {
        console.error(error);
    },
    () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then((response) => {
            editProfile(id, {imageURL: response})
            setLoading(false)    
            setModalOpen(false)
            setProgress(0)
            setCurrentImage({})
        })
    })
}

export const uploadPostImage = (file,setPostImage) =>{
    const postImageRef = ref(storage,`$postImages/${file.name}`)
    const uploadTask = uploadBytesResumable(postImageRef, file)
    uploadTask.on('state_changed',
     (snapshot) => {
        const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes)*100
    
        );
       console.log(progress);
    },
    (error) => {
        console.error(error);
    },
    () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then((response) => {
            setPostImage(response)
        })
    })
}