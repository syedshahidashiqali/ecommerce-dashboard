import propTypes from "prop-types";
import { serialNumber } from "../assets/Utils/helpers";
import NoRecord from "./NoRecord";
import Pagination from "./Pagination";

const Table = ({
  children,
  data,
  fields,
  hasPagination,
  extraHeads,
  extraCells,
  pageChanged,
}) => {
  const colspanFields = () => {
    return Object.keys(fields).length + 1;
  };
  return (
    <>
      <div className="w-100 table-responsive overflow-hidden">
        {children}
        <table className="table text-center" id="cut-table">
          <thead>
            <tr>
              <th className="table-site-headings">S No.</th>
              {fields?.map((field, fieldIndex) => (
                <th className="table-site-headings" key={fieldIndex}>
                  {field.label}
                </th>
              ))}
              {extraHeads()}
            </tr>
          </thead>
          <tbody>
            {!hasPagination ? (
              <>
                {data?.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>{itemIndex + 1}</td>
                    {fields?.map((field, fieldIndex) => (
                      <td key={fieldIndex}>
                        {field.format
                          ? field.format(data[itemIndex][field.key])
                          : data[itemIndex][field.key]}
                      </td>
                    ))}
                    {extraCells(item)}
                  </tr>
                ))}
                <NoRecord tag="tr" data={data} colspan={colspanFields()} />
              </>
            ) : (
              <>
                {data?.data?.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>{serialNumber(data, itemIndex)}</td>
                    {fields?.map((field, fieldIndex) => (
                      <td key={fieldIndex}>
                        {field.format
                          ? field.format(data.data[itemIndex][field.key])
                          : data.data[itemIndex][field.key]}
                      </td>
                    ))}
                    {extraCells(item)}
                  </tr>
                ))}
                <NoRecord tag="tr" data={data.data} colspan={colspanFields()} />
              </>
            )}
          </tbody>
        </table>
        {hasPagination ? (
          <>
            <div className="row justify-content-between align-items-center g-0 px-md-5 px-3 mt-5">
              <div className="col-md-6 mb-4 text-center text-md-start">
                {/* <p className="pagination-results">
                  Showing from {data.from || 0} of {data.totalDocs || 0} entries
                </p> */}
              </div>
              <div className="col-md-6 mb-4">
                <Pagination
                  data={data}
                  onPageChange={(value) => pageChanged(value)}
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

Table.propTypes = {
  fields: propTypes.array,
  hasPagination: propTypes.bool,
  extraCells: propTypes.func,
  pageChanged: propTypes.func,
  extraHeads: propTypes.func,
};

Table.defaultProps = {
  data: {},
  fields: [],
  hasPagination: true,
  extraCells: (item) => {},
  extraHeads: (item) => {},
  pageChanged: (item) => {},
};

export default Table;
