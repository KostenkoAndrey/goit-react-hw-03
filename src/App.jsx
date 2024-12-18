import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactsJson from "./components/ContactList/Contacts.json";

function App() {
const [inputValue, setInputValue] = useState("");
const [contacts, setContacts] = useState(()=> JSON.parse(localStorage.getItem("contacts")) ? JSON.parse(localStorage.getItem("contacts")) : ContactsJson);

const changeValue = (e)=> {
setInputValue(e.target.value);
const search = e.target.value.trim().toLowerCase();
search === "" ? setContacts(ContactsJson) : setContacts(p => p.filter(item => item.name.toLowerCase().startsWith(search)))};  

useEffect(()=> localStorage.setItem("contacts", JSON.stringify(contacts)),[contacts]);


  return (
    <div>
    <h1>Phonebook</h1>
    {/* <ContactForm /> */}
    <SearchBox  searchValue={inputValue} update={changeValue}/>
    <ContactList contacts={contacts} />
  </div>
  
  )
}

export default App
