import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/filtersSlice";

export function SearchBox({ value }) {
  const dispatch = useDispatch();
  const handleChange = (event) => dispatch(filter(event.target.value.trim()));
  const inputId = useId();
  return (
    <div className={css.searchForm}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={css.search}
        id={inputId}
        type="text"
        value={value}
        onChange={handleChange}
        // onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
}
