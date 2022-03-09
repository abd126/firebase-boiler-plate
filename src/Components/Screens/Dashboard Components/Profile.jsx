import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../Config/Firebase'

const Profile = () => {
  // Variables
  const user = localStorage.getItem("currentUser")
  const dbRef = collection(db, "Users")


  //States
  const [currentUser, setCurrentUser] = useState({})


  //useEffects
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const getData = await getDocs(dbRef)
    getData.forEach((user) => {
      if(user === user.data().userUid)
      setCurrentUser(user.data())
      console.log(user.data())
    })
  }, [])
  console.log(currentUser , "user Data")

  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
