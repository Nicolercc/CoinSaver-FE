import React, { useState } from "react";
import axios from "axios";
import "./NewItemForm.css";

function NewItemForm({ setTransactionList, transactionList }) {
  const [formData, setFormData] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${
          process.env.REACT_APP_BACKEND_DOMAIN || "http://localhost:3001"
        }/transactions/create-transactions`,
        formData
      );

      setTransactionList([response.data.data, ...transactionList]);

      setFormData({
        item_name: "",
        amount: "",
        date: "",
        from: "",
        category: "Salary",
      });
    } catch (e) {
      console.log(e);
    }
  }

  return <div></div>;
}

export default NewItemForm;
