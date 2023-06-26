"use client";
import React from "react";
import { BsAirplane } from "react-icons/bs";
import { BiSolidAmbulance } from "react-icons/bi";
import Hospitals from "../components/Hospitals";

const page = () => {
  return (
    <div className="mt-40 mx-8 mdmx-10 md:mx-8">
      <section id="hero" className="flex flex-col items-center ">
        <h1 className="bold mb-3 text-3xl uppercase">Welcome to CareFinder</h1>
        <div className="my-5">
          <p>
            your trusted companion in locating the nearest hospitals and
            healthcare services in your area. We understand the importance of
            easy access to quality healthcare, and our mission is to simplify
            the process of finding healthcare facilities, ensuring that you
            receive the care you need, when you need it.
          </p>
          <p>
            At CareFinder, we believe that everyone deserves convenient access
            to healthcare services, whether its for routine check-ups,
            emergencies, or specialized treatments. In times of urgent medical
            needs, CareFinder is here to assist you.
          </p>
          <p>
            We provide quick access to emergency services with Emergency Air
            Medical Services Nigeria, to call for air ambulance or land
            ambulance to emergency access to the hospital of your choice.
          </p>
        </div>

        <div className="flex gap-4 my-4">
          <button className="btn bg-red-500 text-white">
            <BiSolidAmbulance /> Call Air Ambulance
          </button>
          <button className="btn bg-red-500 text-white ">
            <BsAirplane /> Call Land Ambulance
          </button>
        </div>
      </section>

      <Hospitals />
    </div>
  );
};

export default page;
