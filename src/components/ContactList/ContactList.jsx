import s from "../Contact/Contact.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({ contacts, onDelete }) => {    
return (
    <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) =>
        <li  key={id} className={s.contactItem} ><Contact onDelete={onDelete} id={id} name={name} number={number}/></li>)}
    </ul>
)
};

export default ContactList;
