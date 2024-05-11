import { useState, useMemo, useEffect } from "react";
import ConnectionComponent from "../components/ConnectionComponent";
import Loader from "../components/common/Loader";
import { getCurrentUser } from "../api/FirestoreAPI";

export default function Connection() {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);

    useEffect(() => {
        if (Object.keys(currentUser).length > 0) {
            setLoading(false);
        }
    }, [currentUser]);

    return loading ? <Loader /> : <ConnectionComponent currentUser={currentUser} />;
}

    
    

