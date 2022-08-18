import { useEffect, useState } from "react";
import Table from "./Table";
import { format_date } from "../assets/Utils/helpers";
import { getUsers } from "../assets/Services/Users";
import TableSearch from "./TableSearch";
import { deleteUser } from "../assets/Services/Users";

function Users() {
  const [limit, setLimit] = useState(10);
  const [usersData, setUsersData] = useState([]);
  const [filterValue, setFilterValue] = useState(null);

  const delUser = async (id) => {
    const res = await deleteUser(id);
    if (res?.status === true) {
      alert(res?.message);
      fetchData();
    }
  };

  const fields = [
    {
      label: "Username",
      key: "username",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Role",
      key: "role",
    },
    {
      label: "Registered on",
      key: "createdAt",
      format: format_date,
    },
  ];

  const fetchData = async (page = 1) => {
    let { detail } = await getUsers(page, limit, filterValue);
    setUsersData(detail);
  };

  useEffect(() => {
    fetchData();
  }, [usersData.length, limit, filterValue]);
  return (
    <>
      <h3 className="pull-left bold uppercase black mt-2">Users</h3>
      <div className="clearfix" />
      <div className="card jost pad-20 mt-2 rounded-1">
        <div className="card-content collapse show">
          <div className="card-body table-responsive card-dashboard">
            <div className="clearfix" />
            <div>
              <TableSearch
                onSearch={(value) => setFilterValue(value)}
                onFilterChange={(value) => setLimit(value)}
                filterValues={[10, 50, 100]}
              />
              <Table
                pageChanged={(page) => fetchData(page)}
                fields={fields}
                data={usersData}
                extraHeads={() => <th className="d-grey bold">Action</th>}
                extraCells={(item) => (
                  <td className="py-1">
                    <div className="btn-group mr-1 mb-1">
                      <button
                        type="button"
                        className="btn dropdown-toggle btn-drop-table btn-sm"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" />
                      </button>
                      <div
                        className="dropdown-menu"
                        x-placement="bottom-start"
                        style={{
                          position: "absolute",
                          transform: "translate3d(0px, 21px, 0px)",
                          top: "0px",
                          left: "0px",
                          willChange: "transform",
                        }}
                      >
                        <a
                          className="dropdown-item uppercase"
                          onClick={() => delUser(item?._id)}
                        >
                          <i className="fa fa-ban" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
