"use client";

import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase.config"

const DataList = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Carehub"), (snapshot) => {
      const data: DataType[] = [];
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        } as DataType);
      });
      setData(data);
      console.log(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className="m-2">
          Hospital: {item.Hospital}
          <br />
          Address: {item.Address}
          <br />
          Number: {item.Number}
          <br />
          Website: {item.Website}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
