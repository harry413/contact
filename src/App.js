import {useEffect, useState} from "react";
import './App.css';
import {uuid4} from "uuid4";


import  Header  from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))
  || [] });
  

   useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
   }, [contact])

   const addContact = (data) => {      
    setContact([ ...contact, {id: uuid4(), data}])
   }

   const removeContact = (id) => {
     const updatedList = contact.filter((val) => {
      return (val.id !== id);
     })
     setContact(updatedList);
   }
  return (
    <div className="app">
       <Header/>
       <div>
        <AddContact addContact={addContact}/>
        <ContactList contact={contact} removeContact={removeContact}/>
       </div>
    </div>
  );
}

export default App;