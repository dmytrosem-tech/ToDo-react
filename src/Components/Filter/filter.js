import { v4 as uuid } from "uuid";

export default function Filter({ inputFilter, onChange }) {
  const inputFilterId = uuid();

  return (
    <div className="filter">
      <h3 className="filter__title">Filter todos by content</h3>
      <label className="filter__label" htmlFor={inputFilterId}>
        <input
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
