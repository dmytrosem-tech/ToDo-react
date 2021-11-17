import { v4 as uuid } from "uuid";
import styles from "./Filter.module.css";

export default function Filter({ inputFilter, onChange }) {
  const inputFilterId = uuid();

  const { filter, filter__title, filter__label, filter__input } = styles;

  return (
    <div className={filter}>
      <h3 className={filter__title}>Filter todos by content</h3>
      <label className={filter__label} htmlFor={inputFilterId}>
        <input
          className={filter__input}
          id={inputFilterId}
          type="text"
          value={inputFilter}
          autoComplete="off"
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
}
