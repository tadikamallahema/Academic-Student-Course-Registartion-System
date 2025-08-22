import React from 'react'
import ProfileCard from './profilecard/ProfileCard'
import StudentNavBar from './StudentNavBar'

export default function Profile() 
{
  return (
    <div>
      <StudentNavBar/>
        <br/><br/>
        <ProfileCard/>
    </div>
  )
}
