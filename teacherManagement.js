import React, { useState } from 'react';
import './teacherManagement.css';
import profile from './principal.png'
import Setting from './principal.png';
const App = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  



  const [activeOption, setActiveOption] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('');
  const [showTeachers, setShowTeachers] = useState(false);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setActiveDepartment('');
    setShowTeachers(false);
  };

  const handleDepartmentClick = (department) => {
    setActiveDepartment(department);
    setShowTeachers(true);
  };

  const handleBackClick = () => {
    setShowTeachers(false);
  };


  const [teachers, setTeachers]  =useState( [
    {
      id: 1,
      name: <h3>1-'Tasmia Tariq'</h3>,
      subject: 'Mathematics',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      name:<h3>2-'Muhammad Zeeshan'</h3>,
      subject: 'English',
      email: 'janesmith@example.com',
    },
    {
      id: 2,
      name: <h3>2-'Urooj Kayani'</h3>,
      subject: 'English',
      email: 'janesmith@example.com',
    },
    // Add more teacher objects here
  ]);
  

  const [isAddTeacherOpen, setIsAddTeacherOpen] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    subject: '',
    email: '',
  });

  const toggleAddTeacher = () => {
    setIsAddTeacherOpen(!isAddTeacherOpen);
  };

  const handleInputChange = (e) => {
    setNewTeacher({
      ...newTeacher,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveTeacher = () => {
    if (newTeacher.name && newTeacher.subject && newTeacher.email) {
      const teacherId = teachers.length + 1;
      const teacher = {
        ...newTeacher,
        id: teacherId,
      };
      setTeachers([...teachers, teacher]);
      setNewTeacher({
        name: '',
        subject: '',
        email: '',
      });
      toggleAddTeacher();
    }
  };

  
  const handleDeleteTeacher = (teacherId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this teacher?');
    if (confirmDelete) {
      const updatedTeachers = teachers.filter((teacher) => teacher.id !== teacherId);
      setTeachers(updatedTeachers);
    }
  };




  const renderDepartments = () => {
    switch (activeOption) {
      case 'manageTeachers':
        return (
          <div className="departments-container">
            <button className="department-btn" onClick={() => handleDepartmentClick('Department 1')}>
              Department 1
            </button>
            <button className="department-btn" onClick={() => handleDepartmentClick('Department 2')}>
              Department 2
            </button>
            <button className="department-btn" onClick={() => handleDepartmentClick('Department 3')}>
              Department 3
            </button>
            <button className="department-btn" onClick={() => handleDepartmentClick('Department 4')}>
              Department 4
            </button>
            <button className="department-btn" onClick={() => handleDepartmentClick('Department 5')}>
              Department 5
            </button>
            <button className="department-btn" onClick={() => handleDepartmentClick('Department 6')}>
              Department 6
            </button>
          </div>
        );
      case 'manageStudents':
        // Render departments for managing students
        break;
      case 'manageParents':
        // Render departments for managing parents
        break;
      case 'managePrincipal':
        // Render departments for managing principal
        break;
      default:
        return  <div>   
        <div className="profile-container">
        <div className="profile-header">
          <img src={profile} alt="Profile" className="profile-icon" />
          <div className="admin-name"><strong>Admin's info!</strong></div>
        </div>
        <div className="admin-info">
   {isEditing ? (
     <>
       <label htmlFor="name">Name:</label>
       <input
         type="text"
         id="name"
         value={newAdminName}
         onChange={handleNameChange}
         className="admin-input"
       />
       <label htmlFor="phone">Phone:</label>
       <input
         type="text"
         id="phone"
         value={newAdminPhone}
         onChange={handlePhoneChange}
         className="admin-input"
       />
       <label htmlFor="id">ID:</label>
       <input
         type="text"
         id="id"
         value={newAdminID}
         onChange={handleIDChange}
         className="admin-input"
       />
     </>
   ) : (
     <>
       <div className="admin-name">{`Admin Name: ${adminName}`}</div>
       <div className="admin-phone">{`Phone: ${adminPhone}`}</div>
       <div className="admin-id">{`ID: ${adminID}`}</div>
     </>
   )}
   {isEditing ? (
     <div>
       <button onClick={handleSave} className="save-btn">
         Save
       </button>
       <button onClick={handleCancel} className="cancel-btn">
         Cancel
       </button>
     </div>
   ) : (
     <button onClick={handleEdit} className="edit-btn">
       Edit
     </button>
   )}
   </div>
   </div>
   </div>
    
   }}
   
    const [adminName, setAdminName] = useState('Tasmia');
    const [adminPhone, setAdminPhone] = useState('123-456-7890');
    const [adminID, setAdminID] = useState('A12345');
    const [isEditing, setIsEditing] = useState(false);
    const [newAdminName, setNewAdminName] = useState('');
    const [newAdminPhone, setNewAdminPhone] = useState('');
    const [newAdminID, setNewAdminID] = useState('');
  
    const handleEdit = () => {
      setIsEditing(true);
      setNewAdminName(adminName);
      setNewAdminPhone(adminPhone);
      setNewAdminID(adminID);
    };
  
    const handleSave = () => {
      setAdminName(newAdminName);
      setAdminPhone(newAdminPhone);
      setAdminID(newAdminID);
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
    };
  
    const handleNameChange = (event) => {
      setNewAdminName(event.target.value);
    };
  
    const handlePhoneChange = (event) => {
      setNewAdminPhone(event.target.value);
    };
  
    const handleIDChange = (event) => {
      setNewAdminID(event.target.value);
    };
    


  const renderTeachers = () => {
    switch (activeDepartment) {
      case 'Department 1':
        return (
                  
            <div className="teacher-container">
           <h2><strong>Teachers info!</strong></h2>
         
           {teachers.map((teacher) => (
             <div className="teacher-card" key={teacher.id}>
               <h3>{teacher.name}</h3>
               <div className="teacher-details">
                 <p>Subject: {teacher.subject}</p>
                 <p>Email: {teacher.email}</p>
               </div>
               <button className="delete-button" onClick={() => handleDeleteTeacher(teacher.id)}>
             &#10006;
           </button>
             </div>
           ))}
         
         <div className="add-teacher-container">
         <button className="add-teacher-btn" onClick={toggleAddTeacher}>
           Add Teacher
         </button>
         {isAddTeacherOpen && (
           <div className="add-teacher-form">
             <input
               type="text"
               placeholder="Name"
               name="name"
               value={newTeacher.name}
               onChange={handleInputChange}
             />
             <input
               type="text"
               placeholder="Subject"
               name="subject"
               value={newTeacher.subject}
               onChange={handleInputChange}
             />
             <input
               type="email"
               placeholder="Email"
               name="email"
               value={newTeacher.email}
               onChange={handleInputChange}
             />
             <button onClick={handleSaveTeacher}>Save</button>
           </div>
         )}
       </div></div>
         );
      case 'Department 2':
        // Render teachers for department 2
        break;
      case 'Department 3':
        // Render teachers for department 3
        break;
      case 'Department 4':
        // Render teachers for department 4
        break;
      case 'Department 5':
        // Render teachers for department 5
        break;
      case 'Department 6':
        // Render teachers for department 6
        break;
      default:
        return null;
    }
  };

  return (
   
<>
<div className="navbar">
        <div className="nav-header">ADMIN PANEL</div>
        <div className="settings-container">
        <div className="settings-icon" onClick={toggleDropdown}>
        <img src={Setting} alt="Setting Icon" />
        </div>
        

        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        )} 
       </div>
       </div>
     

  
      <div div className="sidebar">
        <ul className='side-option'>
        <li>
        <button
          className={`sidebar-option ${activeOption === 'manageTeachers' ? 'active' : ''}`}
          onClick={() => handleOptionClick('manageTeachers')}
        >
          Manage Teachers
        </button></li>
        
        <li>
        <button
          className={`sidebar-option ${activeOption === 'manageStudents' ? 'active' : ''}`}
          onClick={() => handleOptionClick('manageStudents')}
        >
          Manage Students
        </button></li>
       <li> <button
          className={`sidebar-option ${activeOption === 'manageParents' ? 'active' : ''}`}
          onClick={() => handleOptionClick('manageParents')}
        >
          Manage Parents
        </button></li>
       <li> <button
          className={`sidebar-option ${activeOption === 'managePrincipal' ? 'active' : ''}`}
          onClick={() => handleOptionClick('managePrincipal')}
        >
          Manage Principal
        </button></li>
        </ul>
        </div>
      {showTeachers ? (
        <div className="teachers">{renderTeachers()}</div>
      ) : (
        <div className="departments">{renderDepartments()}</div>
      )}
      
     </>
  );
};

export default App;