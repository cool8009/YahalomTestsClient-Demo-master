import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";

const Tests = () => {
  const [tests, setTests] = useState([]);
  const fetchTests = async () => {
    //TODO: replace with agent
    const res = await fetch("http://localhost:5000/tests");
    const data = await res.json();

    return data;
  };
  useEffect(() => {
    const getTests = async () => {
      const testsFromServer = await fetchTests();
      setTests(testsFromServer);
    };

    getTests();
  }, []);

  return (
    <div className="container">
      {tests.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
};

export default Tests;
