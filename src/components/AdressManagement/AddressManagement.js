/** @format */

import React, { useEffect, useState } from "react";
import "./AddressManagement.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const AddressManagement = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [AddressArray, setAddressArray] = useState(
    JSON.parse(localStorage.getItem("AddressObj") || "[]")
  );

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const [city, setCity] = useState("");

  const [state, setState] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] = useState("");

  const [array, setArray] = useState(
    JSON.parse(localStorage.getItem("AddressObj") || "[]")
  );

  useEffect(() => {
    const AddressObj = JSON.stringify(AddressArray);
    localStorage.setItem("AddressObj", AddressObj);

    const str = JSON.parse(localStorage.getItem("AddressObj"));
    console.log("hi" + str);

    setArray(str);

    console.log("pppp" + array);
  }, [AddressArray]);

  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='address-modal-div'>
          <p>Fill The Details</p>
          <input
            type='text'
            placeholder='Name'
            value={name}
            className='address-modal-input'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Address'
            className='address-modal-input'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type='number'
            placeholder='Pincode'
            className='address-modal-input'
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <input
            type='text'
            placeholder='City'
            className='address-modal-input'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type='text'
            placeholder='State'
            className='address-modal-input'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type='number'
            placeholder='Phone no.'
            className='address-modal-input'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type='text'
            placeholder='Email'
            className='address-modal-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className='address-modal-btn btn-primary-modal'
            onClick={() => {
              setTimeout(() => {
                setAddressArray([
                  {
                    name: name,
                    address: address,
                    pincode: pincode,
                    city: city,
                    state: state,
                    phoneNumber: phoneNumber,
                    email: email,
                  },
                ]);
              }, 1000);
              onCloseModal();
            }}>
            Done
          </button>
        </div>
      </Modal>
      <div className='address-management'>
        <button onClick={onOpenModal} className='address-modal-btn'>
          Add Address
        </button>
        <div className='adressDiv'>
          {array.length > 0 ? (
            <div>
              {" "}
              <div className='adressDiv-div1'>
                <p>Name </p> <p>{array[0].name}</p>
              </div>
              <div className='adressDiv-div1'>
                <p>Address</p> <p>{array[0].address}</p>
              </div>
              <div className='adressDiv-div1'>
                <p>City</p> <p>{array[0].city}</p>
              </div>
              <div className='adressDiv-div1'>
                <p>State</p> <p>{array[0].state}</p>
              </div>
              <div className='adressDiv-div1'>
                <p>Pincode</p> <p>{array[0].pincode}</p>
              </div>
              <div className='adressDiv-div1'>
                <p>Phone No.</p> <p>{array[0].phoneNumber}</p>
              </div>
              <div className='adressDiv-div1'>
                <p>Email</p> <p>{array[0].email}</p>
              </div>
            </div>
          ) : (
            <div className='addressDiv-div-empty'>
              <p> Please Add the Address For The order </p>
              <img
                src='https://media.tenor.com/QTx8fNRhKbEAAAAM/red-angry-birds.gif'
                alt=''
                className='address-modal-img'
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddressManagement;
