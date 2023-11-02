import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleTransaction({ setTransactionList, transactionList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("updated", id);

  const [singleTransaction, setSingleTransaction] = useState(
    transactionList.find((t) => t.id === parseInt(id))
  );

  console.log(singleTransaction);

  useEffect(() => {
    if (transactionList.length > 0 && !singleTransaction) {
      setSingleTransaction(transactionList.find((t) => t.id === id));
    }
  }, [id, singleTransaction, transactionList]);

  function handleEditClick() {
    navigate(`/edit/${id}`, {
      state: {
        singleTransaction,
        id,
      },
    });
  }

  async function handleDeleteClick() {
    setTransactionList((prevList) =>
      prevList.filter((transaction) => transaction.id !== id)
    );
    navigate("/");
  }

  const isNullTransaction = !singleTransaction;

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="m-3 fw-bold">Transaction Details:</h1>
      <div className="d-flex flex-column justify-content-center align-items-center p-5 border m-5">
        <div className="mb-3 fs-2">
          <span className="fw-bold">Name:</span>{" "}
          {isNullTransaction ? "" : singleTransaction.item_name}
        </div>
        <div className="mb-3 fs-2">
          <span className="fw-bold">From:</span>{" "}
          {isNullTransaction ? "" : singleTransaction.from}
        </div>
        <div className="mb-3 fs-2">
          <span className="fw-bold">Date:</span>{" "}
          {isNullTransaction ? "" : singleTransaction.date}
        </div>

        <div className="mb-3 fs-2">
          <span className="fw-bold">Amount: </span>{" "}
          {isNullTransaction ? "" : singleTransaction.amount}
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={handleEditClick}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-success m-3"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleTransaction;
