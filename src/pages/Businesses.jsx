import React, { useEffect, useState } from "react";
import { Table } from "../components";
import { getAllBusinessApi } from "../actions/business.action";
import { Link } from "react-router-dom";

const Businesses = () => {
  const [business, setBusiness] = useState([]);
  const columns = [
    {
      header: "Sr No.",
      accessorKey: "", // No accessor key since it's derived
      cell: (info) => info.row.index + 1, // Display 1-based index
    },
    { header: "BName", accessorKey: "businessName" },
    { header: "BType", accessorKey: "businessType" },
    { header: "Email", accessorKey: "email" },
    { header: "Mobile", accessorKey: "phoneNumber" },
  ];

  useEffect(() => {
    getAllBusinessApi().then((res) => setBusiness(res.data));
  }, []);

  return (
    <div className="">
      <div className="row">
        <h1 className="text-center">Businesses</h1>
      </div>
      <div className="mt-2 d-flex justify-content-end mx-5 px-4">
        <Link to="add-business" className="btn btn-sm btn-primary fs-5">
          Add Business &nbsp; <i className="bi bi-person-plus-fill fs-5"></i>
        </Link>
      </div>
      <div className="row">
        <Table data={business} columns={columns} />
      </div>
    </div>
  );
};

export default Businesses;
