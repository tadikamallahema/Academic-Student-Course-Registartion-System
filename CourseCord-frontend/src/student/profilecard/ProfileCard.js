import './style.css'
import profile from '../profilecard/student.jpg'
import StudentNavBar from '../StudentNavBar'


export default function ProfileCard()
{
    return <div className="card">
        <StudentNavBar/>
        <br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <img src={profile} alt="profile" width="50%"/><br/><br/>
        <h2>ID : 220003*****</h2>
        <h2>NAME : Student</h2>
        <h2>BRANCH : CSE(H) </h2>
        <h2>YEAR : 2</h2>
        <h1>Email: 220003xxxx@kluniversity.in</h1>
    </div>
}



