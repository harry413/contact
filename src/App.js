import react,{useState} from "react";
import './App.css';


import  Header  from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const [contact, setContact] = useState([]);

   const addContact = (data) =>{
      setContact([...contact, data])
   }
  return (
    <div className="app">
       <Header/>
       <div>
        <AddContact addContact={addContact}/>
        <ContactList contact={contact}/>
       </div>
    </div>
  );
}

export default App;