import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactsJson from "./components/ContactList/Contacts.json";
import ContactForm from './components/ContactForm/ContactForm';

function App() {
const [ inputValue, setInputValue ] = useState("");
const [ contacts, setContacts ] = useState(()=> JSON.parse(localStorage.getItem("contacts")) ? JSON.parse(localStorage.getItem("contacts")) : ContactsJson);
const [ formValue, setformValue ] = useState({id: crypto.randomUUID, name: "", number: ""});

const changeValue = (e)=> {
setInputValue(e.target.value);
const search = e.target.value.trim().toLowerCase();
search === "" ? setContacts(ContactsJson) : setContacts(p => p.filter(item => item.name.toLowerCase().startsWith(search)))};   

useEffect(()=> localStorage.setItem("contacts", JSON.stringify(contacts)),[contacts]);

const handleOnChange = (e) => setformValue({...formValue, id: crypto.randomUUID(), [e.target.name]:e.target.value});

const handleOnSubmit = (e) =>{
  e.preventDefault();
  const [name, number] = e.target.elements;
  if(name.value.trim() === "" || number.value.trim() === ""){
    return alert("fill all field")
  }
  setContacts([...contacts, formValue]);
  setformValue({id: "", name: "", number: ""});
}

const handleOnDelete = (idItem) => setContacts(p => p.filter(i => i.id !== idItem));


  return (
    <div className="mainCont">
    <h1>Phonebook</h1>
    <ContactForm {...formValue} onChange={handleOnChange} onSubmit={handleOnSubmit}/>
    <SearchBox  searchValue={inputValue} update={changeValue}/>
    <ContactList contacts={contacts} onDelete={handleOnDelete} />
  </div>
  
  )
}

export default App
