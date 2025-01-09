import React, { useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { SelectInput } from "..";

const Table = ({
  data = [],
  columns,
  globalFiltering,
  setGlobalFiltering,
  pageSize,
  setPageSize,
}) => {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: globalFiltering,
      pageSize,
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFiltering,
  });

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-11 mt-2">
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table align-middle table-hover m-0">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {/* Sorting Icons */}
                          {header.column.getIsSorted() === "asc" && (
                            <i className="bi bi-sort-alpha-up ms-1 fs-5 fw-2"></i>
                          )}
                          {header.column.getIsSorted() === "desc" && (
                            <i className="bi bi-sort-alpha-down-alt ms-1 fs-5"></i>
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.length > 0 ? (
                    table.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        className="text-center fs-5 text-danger"
                        colSpan={columns.length}
                      >
                        No data to show
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="d-flex gap-2 justify-content-center mt-5">
                {/* First Page Button */}
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <i className="bi bi-chevron-double-left"></i>
                </button>

                {/* Previous Page Button */}
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                {/* Page Info */}
                <span>
                  Page {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
                </span>

                {/* Next Page Button */}
                <button
                  onClick={() => table.nextPage()}
                  className="btn btn-sm btn-primary"
                  disabled={!table.getCanNextPage()}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>

                {/* Last Page Button */}
                <button
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  className="btn btn-sm btn-primary"
                  disabled={!table.getCanNextPage()}
                >
                  <i className="bi bi-chevron-double-right"></i>
                </button>
              </div>

              <div className="row my-2">
                <div className="col-md-3 col-sm-12">
                  <div className="input-group mb-1">
                    <SelectInput
                      className="form-select"
                      label="Enteries per Page"
                      options={[2, 10, 15, 25, 50, 100]}
                      value={pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value));
                        table.setPageSize(Number(e.target.value));
                      }}
                    ></SelectInput>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

// {users.length > 0
//   ? users.map((user, index) => (
//       <tr key={index}>
//          <th scope="row">
// <img
// classNameName="rounded-circle img-3x me-2"
// src="/assets/images/user.png"
// alt="Bootstrap Gallery"
// />

// </th>
//         <td>{index + 1}</td>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//         <td>{user.phone}</td>
//         <td>{user.role_details.role_slug}</td>
//         <td>
//         <a className="btn btn-info btn-sm" href="#"><i className="bi bi-pencil"></i>
//         </a>
//         <a className="btn btn-danger btn-sm ms-1" href="#"><i className="bi bi-trash"></i>
//         </a>
//         </td>

//         <td>
//     <a classNameName="btn btn-info btn-sm" href="#">
//       <i classNameName="bi bi-pencil"></i>
//     </a>
//   </td>
//       </tr>
//     ))
//   : null}

{
  /* <tr>
<th scope="col">Sr No.</th>
<th scope="col">Name</th>
<th scope="col">Email</th>
<th scope="col">Phone</th>
<th scope="col">Role</th>
<th scope="col">Actions</th>
{/* <th scope="col">Salary</th>
<th scope="col">Actions</th> */
}

{
  /* Rows per Page Selector */
}
{
  /* <div className="d-flex justify-content-end mt-3">
  <select
    value={pageSize}
    className="form-select mt-2"
    onChange={(e) => {
      setPageSize(Number(e.target.value));
      table.setPageSize(Number(e.target.value));
    }}
  >
    {[1, 10, 20].map((size) => (
      <option key={size} value={size}>
        Show {size} rows
      </option>
    ))}
  </select>
</div>; */
}
