import React, { useState } from "react";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch(() => {
        alert("error");
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
      <label>Name</label>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>Email</label>
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <label>Message</label>
      <textarea
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Contact;
