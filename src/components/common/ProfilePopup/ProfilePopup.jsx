import React from 'react';
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../../api/AuthAPI";
import { getCurrentUser } from "../../../api/FirestoreAPI";
import Button from "../Button/Button";


export default function ProfilePopup() {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);

  }, []);

  return (
    <div className="flex flex-col bg-[rgba(255,255,255,0.65)] rounded-lg py-4 backdrop-blur-sm px-4 leading-tight">
      <p className="font-bold">{currentUser?.name}</p>
      <p className="text-xs font-extralight mb-4">{currentUser?.headline}</p>
      <Button
        title="View Profile"
        onClick={() =>
          navigate(`/profile/`, {
            state: {
              id: currentUser?.userID,
            },
          })
        }
      />
      <Button title="Log out" onClick={onLogout} />
    </div>
  );
}