import Link from "next/link";
import React from "react";
import Styles from "../../styles/tableData.module.css";
import ConfirmationModal from "../ConfirmationModal";

const TableData = ({ tableData, handleDeletePage }: any) => {
  return (
    <div>
      <table
        className="table table-borderless table-hover"
        style={{ borderRadius: "5px", overflow: "hidden" }}
      >
        <thead className="table-secondary font-bold">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date - Time</th>
            <th scope="col">Page</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((page: any, index: any) => (
            <tr key={page?._id} className="align-baseline">
              <td style={{ fontWeight: "bolder" }}>{page?.name}</td>
              <td>{page?.date}</td>
              <td>{page?.slug}</td>
              <td className="text-primary">
                <div className="d-flex align-items-center">
                  <Link
                    className="me-4"
                    href={`/Editor/${page.slug}`}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>
                  </Link>
                  <ConfirmationModal
                    modalTitle="Delete This Page"
                    modalDescription="Are You Sure That You Want to Delete This Page ?"
                    page={page}
                    handleSubmit={handleDeletePage}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
