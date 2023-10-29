import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log({ transactionList });

  console.log("ID", id);

  const [singleTransaction, setSingleTransaction] = useState(
    transactionList.find((t) => t.id === id)
  );

  useEffect(() => {
    if (transactionList.length > 0 && !singleTransaction) {
      setSingleTransaction(transactionList.find((t) => t.id === id));
    }
  }, [transactionList, id, singleTransaction]);

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

  return <div>SingleTransaction</div>;
}

export default SingleTransaction;
