import css from "./Contact.module.css";
import { BsPersonCircle, BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/contactsSlice";

export function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  {
    return (
      <div className={css.contact}>
        <div className={css.info}>
          <p className={css.name}>
            <BsPersonCircle /> {name}
          </p>
          <span>
            <BsTelephoneFill /> {number}
          </span>
        </div>
        <button className={css.btn} onClick={() => dispatch(remove(id))}>
          Delete
        </button>
      </div>
    );
  }
}
