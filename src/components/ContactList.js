import React from 'react';
import "../App.css";
import {LiaClipboardListSolid} from "react-icons/lia"

const ContactList = ({contact}) => { 
  const contactList = contact.map((val) => {
return(
    <div className='list'>
      <div style={{marginRight: "12px"}}>{val.name}</div>
      <div className='email'>{val.email}</div>
    </div>
)})
  return (
    <>
      <div className='head'>ContactList<span><LiaClipboardListSolid/></span></div>
      <div className="list-item">{contactList}</div>
    </>
  )
}

export default ContactList