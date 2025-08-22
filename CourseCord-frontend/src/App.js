// import logo from './logo.svg';
// import './App.css';

// import Courses from "./admin/courses/Courses";
import FacultyLogin from "./faculty/FacultyLogin";
import FacultyNavBar from "./faculty/FacultyNavBar";
import MainPage from "./main/MainPage";
import { BrowserRouter as Router } from "react-router-dom";
import {Routes,Route} from "react-router-dom"
import Students from "./faculty/Students";
import Courses from "./faculty/Courses";
import Contact from "./faculty/Contact";
import About from "./faculty/About";
import NavBar from "./admin/adminrole/NavBar"
import Profile from "./faculty/Profile";
import AdminLogin from "./admin/adminrole/AdminLogin";
import AdminHome from "./admin/adminrole/AdminHome";
import AddStudent from "./admin/student/AddStudent";
import ViewStudents from "./admin/student/ViewStudents";
import DeleteStudent from "./admin/student/DeleteStudent";
import AddFaculty from "./admin/faculty/AddFaculty";
import ViewFaculty from "./admin/faculty/ViewFaculty";
import RemoveFaculty from "./admin/faculty/RemoveFaculty";
import AddCourse from "./admin/courses/AddCourse";
import ViewCourse from "./admin/courses/ViewCourse";
import RemoveCourse from "./admin/courses/RemoveCourse";
import ChangePassword from "./faculty/ChangePassword";
import StudentLogin from "./student/StudentLogin";
import StudentNavBar from "./student/StudentNavBar";
import ViewCourses from "./student/ViewCourses";
import ProfileCard from "./student/profilecard/ProfileCard";
import ContactUs from "./student/Contact";
import OptionForm from "./student/OptionForm";


// import Faculty from "./admin/faculty/Faculty";
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="/studentlogin/*" element={<StudentLogin />} />
          <Route path="/facultylogin/*" element={<FacultyLogin />} /> 
          <Route path="/facultynavbar/*" element={<FacultyNavBar />} />
          <Route path="/adminnavbar/*" element={<NavBar/>}/>
          <Route path="/studentnavbar/*" element={<StudentNavBar/>}/>
          <Route path="/adminlogin/*" element={<AdminLogin/>}/>

          <Route path="/optionform/*" element={<OptionForm/>}/>
          <Route path="/courses/*" element={<Courses/>}/>
          <Route path="/students/*" element={<Students/>}/>
          <Route path="/contact/*" element={<Contact/>}/>
          <Route path="/about/*" element={<About/>}/>
          <Route path="/profile/*" element={<Profile/>}/>
          <Route path="/adminhome/*" element={<AdminHome />} />
        <Route path="/addstudent/*" element={<AddStudent />} />
        <Route path="/viewstudents/*" element={<ViewStudents/>} />
        <Route path="/removestudent/*" element={<DeleteStudent />} />
        <Route path='/addfaculty/*' element={<AddFaculty />} />
        <Route path='/viewfaculty/*' element={<ViewFaculty />} />
        <Route path='/removefaculty/*' element={<RemoveFaculty />} />
        <Route path='/changepwd/*' element={<ChangePassword/>}/>
        {/*Course routes */}
        <Route path='/addcourse/*' element={<AddCourse />} />
        <Route path='/viewcourse/*' element={<ViewCourse />} />
        <Route path='/removecourse/*' element={<RemoveCourse />} />

          <Route path="/viewcourses/*" element={<ViewCourses />} exact />
          <Route path="/profilecard/*" element={<ProfileCard/>}exact/>
          <Route path="/contactus/*" element={<ContactUs/>}exact/>

        </Routes> 
        
      </Router>
    
    </div>
  );
}

export default App;
