import s from "./Contact.module.css"
import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import { FaUser as User } from "react-icons/fa";
const Contact = ({name, number}) => {
return (
<div className={s.wrapper}>
    <div className={s.outercontainer}>
    <div className={s.innerCont}>
        <User className={s.contactIcon}/>
        <p className={s.innerText}>{name}</p>
    </div>
    <div className={s.innerCont}>
        <Phone className={s.contactIcon}/>
        <p className={s.innerText}>{number}</p>
    </div>
    </div>
<button className={s.contantNBtn}>Delete</button>
    </div>)}

export default Contact;