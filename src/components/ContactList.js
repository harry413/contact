import React from 'react';
import "../App.css";
import {LiaClipboardListSolid} from "react-icons/lia"
import {IoMdTrash} from "react-icons/io";

const ContactList = (props) => { 
  const {contact, removeContact} = props;

  const contactList = contact?.map((val) => {
        return(
            <div className='list '>
              <div style={{marginLeft: "2px"}}>{val.data.name}</div>
              <div className='email'>{val.data.email}</div>
              <span onClick={() => removeContact(val.id)}><IoMdTrash/></span>
            </div>
          )
    })
  return (
    <>
      <div className='head'>ContactList<span><LiaClipboardListSolid/></span></div>
      <div>{contactList}</div>
      
    </>
  )
}

export default ContactList