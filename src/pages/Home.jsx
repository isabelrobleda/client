import React, { useEffect, useState } from "react";
import axios from "axios";
import { HashLink } from "react-router-hash-link";


function Home() {
  const [phonesList, setPhonesList] = useState([]);
  const [phoneDetails, setPhoneDetails] = useState(null);
  const API_URL = "http://localhost:3000";

  const selectPhone = (phone) => {
    setPhoneDetails(phone);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/phones`)
      .then((response) => {
        setPhonesList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>

<div className=" inline-block">
        {phoneDetails && (
          <div className="bg-base-100 gap-4 m-2  md:gap-4 justify-center items-center shadow-xl">
            <h2 className="text-lg mt-2 font-semibold leading-6 text-gray-900">{phoneDetails.name}</h2>
            <img
              src={`../public/${phoneDetails.imageFileName}`}
              alt={phoneDetails.name}
              className="mx-auto w-72"
            />
            <p className="text-lg mt-2 font-semibold leading-6 text-gray-900 mx-1">
              <span>Manufacturer:</span> {phoneDetails.manufacturer}
            </p>
            <p className="text-md mt-2 font-medium leading-6 text-gray-700 w-96 mx-3">{phoneDetails.description}</p>
            <p className="text-md mt-2 font-medium leading-6 text-gray-700 w-96">
              <span>Color:</span> {phoneDetails.color}
            </p>
            <p className="text-md mt-2 font-medium leading-6 text-gray-700 w-96">
              <span>Price:</span> {phoneDetails.price}
            </p>
            <p className="text-md mt-2 font-medium leading-6 text-gray-700 w-96">
              <span>Screen:</span> {phoneDetails.screen}
            </p>
            <p className="text-md mt-2 font-medium leading-6 text-gray-700 w-96">
              <span>Processor:</span> {phoneDetails.processor}
            </p>
            <p className="text-md mt-2 font-medium leading-6 text-gray-700 w-96">
              <span>Ram:</span> {phoneDetails.ram}
            </p>
          </div>
        )}
      </div>

      <div >
        <h1 className="font-bold text-slate-800 text-4xl p-10 text-center">Phone List</h1>
        <div className="bg-base-100 gap-4 m-2 md:grid md:grid-cols-3 md:gap-4 justify-center items-center">
          {phonesList.map((phone) => (
            <HashLink key={phone.id} smooth to={`#phone-${phone.id}`}>
            <div key={phone.id} onClick={() => {selectPhone(phone)}} className="flex items-center min-w-0 gap-x-4 shadow-lg m-2 w-full grid-cols-2 p-3 mr-2">
              <h2 className="text-lg mt-2 font-semibold leading-6 text-gray-900">{phone.name} </h2>
              <img
            src={`../public/${phone.imageFileName}`}
            className="mx-auto w-72"
          />
            </div>
            </HashLink>
          ))}
        </div>
      </div>

    </>
  );
}

export default Home;
