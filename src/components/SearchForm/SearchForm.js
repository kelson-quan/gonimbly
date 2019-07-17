import React from "react";
import "./SearchForm.css";

//Search form component

function SearchForm(props) {
  return (
    <div className="container__search">
      <form className="form-group">
        <div>
          <label htmlFor="search" className="label-form">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for your robot"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
            Search
        </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
