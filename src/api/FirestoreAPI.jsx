import { firestore } from '../firebaseConfig'
import {addDoc, collection, onSnapshot, doc, updateDoc, query, where, orderBy, setDoc, deleteDoc} from 'firebase/firestore'
import {toast} from "react-toastify"

let dbRef = collection(firestore,'posts');
let userRef = collection(firestore, 'users');
let likeRef = collection(firestore, 'likes');
let commentRef = collection(firestore, 'comments');
export const postStatus = (object)=>{
    addDoc(dbRef, object)
    .then(() => {
        toast.success("Posted")
    })
    .catch(()=>{
        toast.error("Some error occured, please try again!")
    })
}

export const getPosts = (setAllPosts) =>{
  const q = query(dbRef,orderBy("timeStamp"));
    onSnapshot(q, (response) =>{
        setAllPosts(
            response.docs.map((docs) => {
                return {...docs.data(), id: docs.id };
            })
        );
    })
}

export const getAllUsersImg = (setAllUsers) => {
  onSnapshot(userRef, (response) =>{
      setAllUsers(
          response.docs.map((docs) => {
              return {...docs.data(), id: docs.id };
          })
      );
  })
}

export const postUserData = (object) => {
    addDoc(userRef, object)
        .then(() => {})
        .catch((err) => {
            console.log(err);
        });
};

export const getCurrentUser = async(setCurrentUser) => {
    onSnapshot(userRef, (response) => {
      setCurrentUser(
        response.docs
          .map((docs) => {
            return { ...docs.data(), userID: docs.id };
          })
          .filter((item) => {
            return item.email === localStorage.getItem('userEmail');
          })[0]
          
      );

    });
   
  };

export const getSingleStatus = (setAllStatus, id) => {
  const singlePostQuery = query(dbRef, where("userID", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return {...docs.data(), id: docs.id }
      })
      )
    })
  }
export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return {...docs.data(), id: docs.id}
      })[0]
    )
  })
}
export const editProfile = (userID, payload) =>{
    let userToEdit = doc(userRef, userID)

    updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Changes saved");
    })
    .catch(() => {
      toast.error("Try again!")
    });
}   

export const LikePost = (userId, postId, liked ) => {
  try
  {
  let docToLike = doc(likeRef, `${userId}_${postId}`);
  if(liked){
    deleteDoc(docToLike)
  }
  else{
    setDoc(docToLike, { userId, postId });
  }
  

  }
  catch(err){
    console.log(err);
  }
}

export const getLikesByUser = (userId, postId, setLikesCount, setLiked) => {
      try{
        let likeQuery = query(likeRef, where('postId', '==', postId))

        onSnapshot(likeQuery, (response) => {
          let likes = response.docs.map((doc) => doc.data())
          let likesCount = likes?.length;
          const isLiked = likes.some((like) => like.userId === userId);
          setLikesCount(likesCount);
          setLiked(isLiked);
          })
        } 
      catch(err){
        console.log(err)
      }
    }

export const postComment = ( name, postId, comment, timeStamp) => {
  try{
    addDoc(commentRef, {
      name, postId, comment, timeStamp
    })
  }
  catch(err){
    console.log(err)
  }
}

export const getComments = (postId, setComments) => {
  try{
    let singlePostQuery = query(commentRef, where('postId', '==', postId))

    onSnapshot(singlePostQuery,(response) => {
      const comments = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
      })
      setComments(comments)
    })
  }
  catch(err){
    console.log(err)
  }
}

export const deletePost=(id)=>{
  let docToDelete =doc(dbRef, id);
   try{
    deleteDoc(docToDelete);
    toast.success("Post deleted");
   }
   catch(err)
   {
    console.log(err)
   }
}