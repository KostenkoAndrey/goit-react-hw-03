import s from "./ContactForm.module.css"

const ContactForm = ({ onChange,  onSubmit, name, number}) => {
  return (
    <form onSubmit={onSubmit} className={s.form}>
      <label className={s.formLabel}>
        <span className={s.labelSpan}>Name</span>
            <input value={name} onChange={onChange} type="text" name="name" className={s.formInput}/>
        </label>
        <label className={s.formLabel}>
        <span className={s.labelSpan}>Number</span>
            <input value={number} onChange={onChange} type="text" name="number" className={s.formInput}/>
        </label>
            <button type="submit" className={s.formBtn}>Add contact</button>
    </form>)
    }


export default ContactForm;
