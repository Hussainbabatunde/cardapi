import React, {useState, useEffect} from 'react';
import './Apipage.css';
import teni from "./teni.png";
import axios from "axios";

function Api() {
  const [person, setPerson] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [show, setShow] = useState("");

  useEffect(()=>{
  const working = axios.get("https://randomuser.me/api").then(
    (response) => {
      const info = response.data.results[0];
      console.log(info); 
      const name = info.name.first +" "+ info.name.last;
      const sex = info.gender;
      const place =info.location.street.number + ", " + info.location.street.name + ", " +  info.location.country;
      const mail = info.email;
      const cell = info.cell;
      const pic = info.picture.large;
      setPerson(name);
      setGender(sex);
      setAddress(place);
      setEmail(mail);
      setNumber(cell);
      setShow(pic);
    }
  );
  }, []
  )
  

  return (
    <div>
      <h1 className="card">Contact Details</h1>
      <div className="container">
      <div className="cardDetails">
      <img src={show} alt='image of a person' />
        <p className="name">Name: {person}.</p>
        <p className="name">Gender: {gender}.</p>
        <p className="name">Address: {address}.</p>
        <p className="name">Phone number: {number}.</p>
        <p className="name">Email: {email}.</p>
     </div>
     </div>
    </div>
  );
}

export default Api;
