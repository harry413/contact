import React,{useState} from 'react';
import '../App.css';

const AddContact = ({addContact}) => {
      const [contactData, setContactData] = useState({name: "", email:""}); 

     const handelChange = (e) => {
        if(e.target.name === "name"){
          setContactData({...contactData, name:e.target.value});
        }else{
          setContactData({...contactData, email:e.target.value});
        }
     }

     const handleAdd = () => {
       if(contactData.name === "" || contactData.email === ""){
         alert("Please fill all details");
         return
       }
       addContact(contactData);
       setContactData({name: "", email:""});
     }
  return (
    <div className='contact'>
        <div className='contact-head'>Add contact</div>
        <form className='contact-form'>
          <label>Name:</label>
          <input name='name' placeholder='enter name' type='text' className='text' value={contactData.name} onChange={handelChange}/>
          <label>Email:</label>
          <input name='email' placeholder='enter email' type='email'  className='email' value={contactData.email} onChange={handelChange}/>
        </form>
        <button className='btn' onClick={handleAdd}>add contact</button>
    </div>
  )
}

export default AddContact