import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import db from "./firebase";
import "./EmailVerify.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { Link, useHistory } from "react-router-dom";

function EmailVerify() {
  const [state, dispatch] = useStateValue();
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [founduser, setFounduser] = useState(false);
  const [val, setVal] = useState("");
  const history = useHistory();

  const sendEmail = (e) => {
    let otp = Math.floor(100000 + Math.random() * 900000);
    e.preventDefault();
    console.log(e.target);
    e.target.elements.message.value = otp;
    emailjs
      .sendForm(
        "service_zyryk67",
        "template_qrgm4y3",
        e.target,
        "user_CYX0Zs58xU5dZ1YpW7Lvu"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
    //     e.target.reset();

    let docId = null;
    db.collection("emails")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          if (data.email === email) {
            console.log("check", data);
            docId = doc.id;
          }
        });
        // console.log(docId);
        if (!docId) {
          db.collection("emails").add({
            email: email,
            name: name,
            otp: otp,
          });
        } else {
          db.collection("emails").doc(docId).update({
            otp: otp,
          });
        }
      });
  };

  const checkUser = async (e) => {
    e.preventDefault();
    console.log(e.target);
    db.collection("emails")
      .get()
      .then((snapshot) => {
        // console.log(snapshot.docs);
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          //   console.log(doc.data());
          //   console.log(email, val);
          if (data.email === email && +data.otp === +val) {
            //     console.log("check", data);
            dispatch({
              type: actionTypes.SET_USER,
              user: {
                email,
              },
            });
            //     console.log(typeof data.email);
            localStorage.setItem("user", JSON.stringify({ email: data.email }));
            history.push("/");
            //     return data;
          }
        });
      });
  };
  return (
    <div className="emailVerify">
      <div className="form">
        <form onSubmit={sendEmail}>
          <h1>Verify With Email-OTP</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input_email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input type="hidden" name="subject" placeholder="Subject" />
          <input type="hidden" name="message" placeholder="Message" />
          <input
            type="submit"
            value="send otp"
            className="input_button"
            onClick={() => setFounduser(true)}
          />
        </form>
        <form onSubmit={checkUser}>
          {founduser ? (
            <input
              type="number"
              name="otp"
              onChange={(event) => setVal(event.target.value)}
              className="otp_input"
              required
            />
          ) : (
            <span></span>
          )}
          <input type="submit" value="submit" className="otp_button"></input>
        </form>
      </div>
    </div>
  );
}

export default EmailVerify;
