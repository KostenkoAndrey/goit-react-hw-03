import s from "../Contact/Contact.module.css"
import Contact from "../Contact/Contact"

const ContactList = ({ contacts }) => {    
return (
    <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) =>
        <li key={id}><Contact name={name} number={number}/></li>)}
    </ul>
)
};

export default ContactList;
