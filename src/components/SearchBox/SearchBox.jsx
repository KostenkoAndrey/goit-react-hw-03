import s from './SearchBox.module.css'
import { useId } from 'react';

const SearchBox = ({ searchValue, update }) => {
const inputId = useId();
const changeValue = (e)=> {
    setInputValue(e.target.value);
    const search = e.target.value.trim().toLowerCase();
    search === "" ? setContacts(ContactsJson) : setContacts(p => p.filter(item => item.name.toLowerCase().startsWith(search)))};  
    
return (
    <label className={s.labelSearch} htmlFor={inputId}>
        <span className={s.labelSpan}>Find contacts by name</span>
        <input className={s.inputSearch} value={searchValue} onChange={update} id={inputId} />
    </label>)}

export default SearchBox;
