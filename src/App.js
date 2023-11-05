import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import NewItemForm from "./components/NewItemForm/NewItemForm";
import SingleTransaction from "./components/SingleTransaction/SingleTransaction";
import Total from "./components/Total/Total";
import EditTransaction from "./components/EditTransaction/EditTransaction";
import "./App.css";

function App() {
  const baseURL = "https://coinsaverapi.onrender.com/transactions";

  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        let result = await axios.get(`${baseURL}`);

        setTransactionList(result.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchTransactions();
  }, [baseURL]);

  return (
    <Router>
      <>
        <Nav />
        <Total transactionsArray={transactionList} />
        <div className="border">
          <div className="border-left-right">
            {/* <Total transactionsArray={transactionList} /> */}
            <Routes>
              <Route
                path="/"
                element={<Home transactionsArray={transactionList} />}
              />
              <Route
                path="/transaction/:id"
                element={
                  <SingleTransaction
                    transactionList={transactionList}
                    setTransactionList={setTransactionList}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <EditTransaction
                    transactionList={transactionList}
                    setTransactionList={setTransactionList}
                  />
                }
              />
              <Route
                path="/form"
                element={
                  <NewItemForm
                    transactionList={transactionList}
                    setTransactionList={setTransactionList}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
