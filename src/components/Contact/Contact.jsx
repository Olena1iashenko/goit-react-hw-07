import { IoMdContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <li className={s.contact}>
      <div className={s.div}>
        <h3>
          <IoMdContact />
          {name}
        </h3>
        <p>
          <FaSquarePhone />
          {number}
        </p>
      </div>
      <button type="button" className={s.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
