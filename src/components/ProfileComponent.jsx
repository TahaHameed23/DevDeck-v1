import React from 'react';
import {useState} from 'react'
import ProfileCard from './common/ProfileCard/ProfileCard'
import ProfileEdit from './common/ProfileEdit/edit';
export default function ProfileComponent({currentUser}) {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(!isEdit)
  }
  return (
    <div>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
        ) : (
          <ProfileCard currentUser={currentUser} onEdit={onEdit} />
        )}
    </div>
  );
}
