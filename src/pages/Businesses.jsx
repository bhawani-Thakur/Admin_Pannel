import React, { useEffect, useState } from "react";
import { Table } from "../components";
import { getAllBusinessApi } from "../actions/business.action";
import { Link } from "react-router-dom";

const Businesses = () => {
  const [business, setBusiness] = useState([]);
  const [refresh, setRefresh] = useState(true);

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
  ];

  useEffect(() => {
    getAllBusinessApi().then((res) => setBusiness(res.data));
  }, [refresh]);

  return (
    <div>
      <div className="row">
        <h1 className="text-center">Businesses</h1>
      </div>
      <div className="mt-2 d-flex justify-content-end gap-2 mx-5 px-4">
        <Link to="/admin/users" className="btn btn-sm btn-primary">
          Users &nbsp; <i className="bi bi-arrow-left"></i>
        </Link>
        <button
          className="btn btn-sm btn-success"
          onClick={(e) => setRefresh((prev) => !prev)}
        >
          Refresh <i className="bi bi-arrow-clockwise"></i>
        </button>
      </div>
      <div className="row">
        <Table data={business} columns={columns} />
      </div>
    </div>
  );
};

export default Businesses;
