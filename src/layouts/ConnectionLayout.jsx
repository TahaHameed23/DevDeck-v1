import React from "react";
import { useState,useMemo } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Connection from "../Pages/Connection";

export default function ConnectionLayout() {
    const [currentUser, setCurrentUser] = useState({});
    
    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);
    return (
        <div>
        <Connection currentUser={currentUser} />
        </div>
    );
    }