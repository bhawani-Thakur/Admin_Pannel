import React, { useEffect, useState } from "react";
import { Modal, SelectInput, Table } from "../components";
import {
  getAllBusinessApi,
  updateBusinessStatusApi,
} from "../actions/business.action";
import { Link } from "react-router-dom";

const Businesses = () => {
  const [business, setBusiness] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [filtering, setFiltering] = useState("");
  const [data, setData] = useState({ id: "", value: "" });
  const [modalopen, setModalopen] = useState(false);

  const columns = [
    {
      header: "Sr No.",
      accessorKey: "",
      cell: (info) => info.row.index + 1, // Display 1-based index
    },
    { header: "B_Name", accessorKey: "businessName" },
    { header: "B_Type", accessorKey: "businessType" },
    { header: "Email", accessorKey: "email" },
    { header: "Mobile", accessorKey: "phoneNumber" },
    { header: "B_Address", accessorKey: "businessAddress" },
    {
      header: "B_Status",
      accessorKey: "",
      cell: ({ row }) => {
       
        const status = row.original.status;
        const handleSelectChange = (id, status) => {
          updateBusinessStatusApi(id, status)
            .then((res) => console.log(res))
            .catch((err) => console.log("Error", err));
        };

        return (
          <SelectInput
            options={["active", "inactive", "pending"]}
            value={status}
            onChange={(e) => {
              handleSelectChange(row.original._id, e.target.value);
            }}
          />
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "",
      cell: ({ row }) => {
        return (
          <div className="d-flex gap-2">
            <button
              title="remove resturant"
              className="btn btn-sm btn-danger btn-icon"
              onClick={() => handleStatusChange(row.original._id, "deleted")}
            >
              <i className="bi  bi-trash"></i>
            </button>
            <Link
              to="edit-business"
              state={{ business: row.original }}
              title="edit Resturant"
              className="btn btn-sm btn-primary  btn-icon"
            >
              <i title="remove resturant" className="bi  bi-pencil"></i>
            </Link>
          </div>
        );
      },
    },
  ];

  const getStatus = (status) => {
    // Actual API call to change status

    if (status) {
      updateBusinessStatusApi(data.id, data.value)
        .then((res) => {
          // Toggle statusChanged
          console.log(res);
          setModalopen(false); // Close modal after status update
        })
        .catch((err) => console.log(err));
    } else {
      setModalopen(false); // Close modal if user cancels
    }
  };

  // Used inside Onclick
  const handleStatusChange = (id, status) => {
    setModalopen(true); // Open modal for confirmation before updating status
    setData({ id, value: status });
  };

  // For Page Refresh
  const handleRefresh = () => {
    setLoading(true);
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    getAllBusinessApi()
      .then((res) => {
        setBusiness(res.data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.message);
      })
      .finally(() => {
        setError("");
        setLoading(false);
      });
  }, [refresh]);

  return (
    <>
      <Modal
        title="Do you Want to delete Resturant ?"
        display={modalopen}
        getstatus={getStatus}
      />
      <div>
        <div className="row my-2">
          <h1 className="text-center">Businesses</h1>
        </div>
        {/* Error while Fetching Data  */}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mt-2 d-flex justify-content-end gap-2 mx-5 px-4">
          <Link to="/admin/users" className="btn btn-sm btn-primary">
            <i className="bi bi-arrow-left"> Users &nbsp;</i>
          </Link>
          <button
            className="btn btn-sm btn-success"
            disabled={loading}
            onClick={handleRefresh}
          >
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <i className="bi bi-arrow-clockwise">Refresh</i>
            )}
          </button>
        </div>
        {/* Adding Search Here  */}

        <div className="row mt-4 mx-5 px-3 d-flex justify-content-end">
          <div className="col-md-4 col-sm-12">
            <input
              type="text"
              value={filtering}
              placeholder="Search..."
              className="form-control"
              style={{ marginBottom: "10px" }}
              onChange={(e) => setFiltering(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <Table
            data={business}
            columns={columns}
            pageSize={pageSize}
            setPageSize={setPageSize}
            filtering={filtering}
            setFiltering={setFiltering}
          />
        </div>
      </div>
    </>
  );
};

export default Businesses;
