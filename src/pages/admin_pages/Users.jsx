import React, { useEffect, useState } from "react";
import { Modal, SelectInput, Table } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserApi, updateUserStatusApi } from "../../actions/user.action";
import { getAllUsers } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.root.user.users);

  const [statusChanged, setStatusChanged] = useState(false); // Track status  and fetch updates change
  const [modalopen, setModalopen] = useState(false);
  const [data, setData] = useState({ id: "", value: "" });
  const [globalFiltering, setGlobalFiltering] = useState("");
  const [filter, setFilter] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  const columns = [
    {
      header: "Sr No.",
      accessorKey: "", // No accessor key since it's derived
      cell: (info) => info.row.index + 1, // Display 1-based index
    },
    { header: "Name", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
    { header: "Mobile", accessorKey: "phone" },
    { header: "Role", accessorKey: "role_name" },
    {
      header: "Status",
      accessorKey: "",
      cell: ({ row }) => {
        const status = row.original.status;
        const handleSelectChange = (id, status) => {
          updateUserStatusApi(id, status)
            .then(() => setStatusChanged((prev) => !prev))
            .catch((err) => console.log(err));
        };
        return (
          <SelectInput
            value={status}
            options={["pending", "active", "inactive"]}
            onChange={(e) =>
              handleSelectChange(row.original._id, e.target.value)
            }
          />
        );
      },
    }, // Working Fine

    {
      header: "Actions",
      accessorKey: "",
      cell: ({ row }) => {
        return (
          <div className="d-flex gap-2">
            <Link
              className="btn btn-info btn-sm"
              to={`/admin/users/edit-user/${row.original._id}`}
              state={{ user: row.original }}
            >
              <i className="bi bi-pencil"></i>
            </Link>
            <Link
              className="btn btn-danger btn-icon btn-sm"
              onClick={() => handleStatusChange(row.original._id, "deleted")}
            >
              <i className="bi bi-trash"></i>
            </Link>
          </div>
        );
      },
    },

    {
      header: " Add Business",
      accessorKey: "",
      cell: ({ row }) => {
        if (row.original.role_name === "User") {
          return (
            <button className="btn btn-sm  btn-danger">Not Allowed</button>
          );
        }
        return (
          <Link
            to={"/admin/businesses/add-business"}
            state={{ user: row.original }}
            className="btn btn-sm btn-primary text-center  ms-4"
            title="Add Business"
          >
            <i className="bi bi-building-add fs-5"></i>
          </Link>
        );
      },
    },
    {
      header: "Owned Business",
      accessorKey: "",
      cell: ({ row }) => (
        <Link
          className="btn btn-sm btn-warning text-white ms-3"
          title="Business List"
        >
          View
        </Link>
      ),
    },
  ];
  // Used Inside Modal OnChange to get Value.
  const getstatus = (status) => {
    if (status) {
      updateUserStatusApi(data.id, data.value)
        .then(() => {
          setStatusChanged((prev) => !prev); // Toggle statusChanged
          setModalopen(false); // Close modal after status update
        })
        .catch((err) => console.log(err));
    } else {
      setModalopen(false); // Close modal if user cancels
    }
  };
  // Handle status change
  const handleStatusChange = (id, status) => {
    setModalopen(true); // Open modal for confirmation before updating status
    setData({ id, value: status });
  };

  useEffect(() => {
    getAllUserApi()
      .then((res) => dispatch(getAllUsers(res.data.data)))
      .catch((err) => console.log(err));
  }, [statusChanged, dispatch]);

  return (
    <>
      <Modal
        title="Do you Want to delete?"
        display={modalopen}
        getstatus={getstatus}
      />

      <div className="mt-4 d-flex justify-content-end mx-5 px-4">
        <Link to="add-user" className="btn btn-sm btn-primary">
          Add User &nbsp; <i className="bi bi-person-plus-fill"></i>
        </Link>
      </div>

      {/* Search Input */}
      <div className="row mt-4 mx-5 px-3 d-flex justify-content-end">
        <div className="col-md-4 col-sm-12">
          <input
            type="text"
            value={globalFiltering}
            placeholder="Search..."
            className="form-control col-md-8 col-sm-12 mb-3"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setGlobalFiltering(e.target.value)}
          />
        </div>
      </div>

      <Table
        data={users || []}
        columns={columns}
        globalFiltering={globalFiltering}
        setGlobaLFiltering={setGlobalFiltering}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
}

export default Users;
