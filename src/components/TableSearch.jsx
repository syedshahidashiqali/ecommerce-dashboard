import React from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

function TableSearch({ filterValues, onFilterChange, onSearch, onDateChange }) {
  const handleSearch = debounce((value) => {
    onSearch(value);
  }, 500);

  return (
    <>
      <div className="row justify-content-between mb-5">
        <div className="col-xl-4 col-lg-5 col-md-7">
          <div className="row">
            <div className="col-md-6 mb-2">
              Show
              <select
                style={{
                  padding: "5px 30px",
                  margin: "5px 10px",
                  border: "none",
                  borderRadius: "10px",
                }}
                onChange={(e) => onFilterChange(e.target.value)}
                className="form-select form-field"
              >
                {filterValues.map((value, valueIndex) => (
                  <option key={valueIndex} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              Entries
            </div>
            {/* <div className="col-md-6 mb-2">
              <input
                id="eventDate"
                onChange={(e) => {}}
                className="form-select form-field"
                type="date"
                placeholder="Event Date"
              />
            </div> */}
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-5 mb-2">
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            className="form-control form-field search"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
}

TableSearch.propTypes = {
  filterValues: PropTypes.array,
  onFilterChange: PropTypes.func,
};

TableSearch.defaultProps = {
  filterValues: [],
  onFilterChange: (value) => {},
};

export default TableSearch;
