"use client";

import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase.config";
import Link from "next/link";

const Hospitals = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    });

    return () => unsubscribe();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.Hospital.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10">
      <input
        className="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
        placeholder="Search for a hospital"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id} className="flex flex-col m-2">
            <div>
              Hospital: {item.Hospital}
              Address: {item.Address}
              Number: {item.Number}
            </div>
            <a href={item.Website}>
              <button className="btn">visit website</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hospitals;
