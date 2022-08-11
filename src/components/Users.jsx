import { useState } from "react";
import { deleteApi } from "../assets/Helpers/api";
import { DELUSERS, USERS } from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";

function Users() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const users = useGetApi(`${USERS}?page=${page}&limit=${limit}`);

  const delUser = async (id) => {
    const res = await deleteApi(`${DELUSERS}/${id}`, "DELETE", {
      "x-access-token": localStorage.getItem("TOKEN"),
    });
    console.log(res);
  };
  return (
    <>
      <h3 className="pull-left bold uppercase black mt-2">Users</h3>
      <div className="clearfix" />
      <h3 className="pull-left p_lg medium black mt-2">Users Log</h3>
      <div className="d-flex mt-3 align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center flex-wrap">
          <p className="grey">Show</p>
          <select
            className="entry-select ml-1"
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value={10}>10</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p className="grey ml-1">Entries</p>
        </div>
        <div>
          <input
            type="text"
            className="ml-1 px-1 h-45 py-0"
            placeholder="Enter User Id"
          />
        </div>
      </div>
      <div className="card jost pad-20 mt-2 rounded-1">
        <div className="card-content collapse show">
          <div className="card-body table-responsive card-dashboard">
            <div className="clearfix" />
            <div className="clearfix" />
            <div>
              <table className="table table-striped table-bordered zero-configuration">
                <thead>
                  <tr>
                    <th className="d-grey bold">ID</th>
                    <th className="d-grey bold">Username</th>
                    <th className="d-grey bold">Email</th>
                    <th className="d-grey bold">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.detail?.docs.map((user) => {
                    return (
                      <tr key={user._id}>
                        <td className="py-1">{user?._id}</td>
                        <td className="py-1">{user?.username}</td>
                        <td className="py-1">{user?.email}</td>
                        <td className="py-1">{user?.role}</td>
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
                                onClick={() => delUser(user?._id)}
                              >
                                <i className="fa fa-ban" />
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
      <div
        className="modal fade"
        id="changestatus"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close text-right clr-orange mr-1 mt-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="px-2 pb-5 text-center">
              <img src="images/motorcycle.png" alt="" className="img-fluid" />
              <h3 className="jost bold mt-1 clr-orange">Alert</h3>
              <p className="d-blue mt-1 medium ">
                Status for Order 123 has been changed to Delivered
              </p>
              <div className="d-flex flex-wrap justify-content-center">
                <a href="orders.html">
                  <button className="px-4 mx-1 py-1 mt-2">Got it</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="blockUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close text-right clr-orange mr-1 mt-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="px-2 pb-5 text-center">
              <img src="images/alert.png" alt="" className="img-fluid" />
              <h3 className="jost bold mt-1 clr-orange">Alert</h3>
              <p className="d-blue mt-1 medium ">
                Are you sure you want to block this user?
              </p>
              <div className="d-flex flex-wrap justify-content-center">
                <a
                  href="#_"
                  data-toggle="modal"
                  data-target="#userBlocked"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <button className="px-4 mx-1 py-1 mt-2">Yes</button>
                </a>
                <a href="#_">
                  <button
                    className="px-4 mx-1 py-1 mt-2"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    No
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="userBlocked"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close text-right clr-orange mr-1 mt-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="px-2 pb-5 text-center">
              <img src="images/alert.png" alt="" className="img-fluid" />
              <h3 className="jost bold mt-1 clr-orange">Alert</h3>
              <p className="d-blue mt-1 medium ">User has been Blocked</p>
              <div className="d-flex flex-wrap justify-content-center">
                <a data-dismiss="modal" aria-label="Close">
                  <button className="px-4 mx-1 py-1 mt-2">Got It</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="logout"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close text-right clr-orange mr-1 mt-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="px-2 pb-5 text-center">
              <img src="images/alert.png" alt="" className="img-fluid" />
              <h3 className="jost bold mt-1 clr-orange">Alert</h3>
              <p className="d-blue mt-1 medium ">
                Are you sure you want to Logout?
              </p>
              <div className="d-flex flex-wrap justify-content-center">
                <a href="admin-login.html">
                  <button className="px-4 mx-1 py-1 mt-2">Yes</button>
                </a>
                <a href="#_">
                  <button
                    className="px-4 mx-1 py-1 mt-2"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    No
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
