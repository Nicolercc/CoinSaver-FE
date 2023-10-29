import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function formatDate(dateString) {
    const options = { month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading-container">
          <h2>Loading...</h2>
          {/* You can add a loading spinner or animation here */}
        </div>
      </div>
    );
  }
  return <div>Home</div>;
}

export default Home;
