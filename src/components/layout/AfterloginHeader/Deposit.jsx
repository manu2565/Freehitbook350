import React, { useState } from "react";
import { Link } from "react-router-dom";

function Deposit() {
  const [activeTab, setActiveTab] = useState("Deposit");
  const [amount, setAmount] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAmountChange = (value) => {
    setAmount(value);
  };
  return (
    <div
    data-v-cb9ac2ee=""
    className="position-relative main-container-user inplay_container"
  >
 <section
  data-v-23ad3f32=""
  data-v-cb9ac2ee=""
  className="theme-warpper getid-user-iframe"
>
<div className="getid-body">

  {/**/}{" "}
  <iframe
    data-v-23ad3f32=""
    id="myFrame"
   
  />
 
  <div className="d-flex align-items-center justify-content-center loader_section">
    <div className="cssload-container">
      <div className="cssload-loading">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  </div>
  <div id="app">
    <div className="app">
      <section className="payment-toast-sec" style={{ display: "none" }}>
        <div
          className="js-container animation-outer"
          style={{ position: "relative" }}
        >
          <div className="confetti-container">
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 8,
                height: 8,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(239, 255, 29)"
              }}
            />
            <div
              className="confetti confetti--animation-medium"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(239, 41, 100)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(45, 135, 176)"
              }}
            />
            <div
              className="confetti confetti--animation-fast"
              style={{
                left: 0,
                width: 9,
                height: 9,
                backgroundColor: "rgb(0, 192, 157)"
              }}
            />
            <div
              className="confetti confetti--animation-slow"
              style={{
                left: 0,
                width: 7,
                height: 7,
                backgroundColor: "rgb(72, 72, 94)"
              }}
            />
          </div>
        </div>{" "}
        <div className="toast-card">
          <div className="toast-inside">
            <div className="checkmark-circle">
              <div className="background" /> <div className="checkmark draw" />
            </div>{" "}
            <h1>Payment Successfull!</h1> <p>Thanks for being there with us.</p>{" "}
            <button type="button" className="submit-btn">
              Continue
            </button>
          </div>
        </div>
      </section>{" "}
      <div data-bs-toggle="modal" data-bs-target="#notification-alert" />{" "}
      <div
        id="notification-alert"
        tabIndex={-1}
        aria-labelledby="notificationModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        className="modal fade"
      >
        <div className="modal-dialog show">
          <div className="modal-content">
            <div className="modal-body">
              <div className="notifi-section">
                <div className="notifi-icon">
                  <img src="/user/images/notification-alert.svg" alt="" />
                </div>{" "}
                <div className="notify-theme-info">
                  <h3>Turn on the Notifications</h3>{" "}
                  <div className="notify-justify-btn">
                    <button
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="btn cancel-but"
                    >
                      Cancel
                    </button>{" "}
                    <button data-bs-dismiss="modal" className="btn thm-but">
                      Allow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <section>
          {/**/} {/**/}{" "}
          <div
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            className="offcanvas offcanvas-end"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel" className="offcanvas-title">
                <Link to="index.html" className="admin-logo">
                  <img src="/user/images/logo-img.svg" alt="logo" />
                </Link>
              </h5>{" "}
              <button
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                className="btn-close"
              />
            </div>{" "}
            <div className="offcanvas-body">
              <div className="mobile-sidebar-nav">
                <ul>
                  <li />
                </ul>
              </div>
            </div>{" "}
            <div className="offcanvas-footer aside_canvas">
              <div className="mobile-sidebar-nav">
                <ul>
                  <li>
                    <Link
                      to="#"
                      data-bs-dismiss="offcanvas"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="wallet-balance-iconn">
                        <i className="side-nav-icon power_off">
                          <img
                            src="/user/images/power.png"
                            alt=""
                            className="log_out-btn"
                          />
                        </i>{" "}
                        <p>
                          <span>Demouser1</span>{" "}
                          <span>
                            <strong>Logout</strong>
                          </span>
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
      <section>
        {/**/}{" "}
        <section>
          <section data-v-6c2e4440="">
            <div data-v-6c2e4440="" className="rit-side-contant">
              <div data-v-6c2e4440="" className="main-content">
                <section
                  data-v-6c2e4440=""
                  className="games-wrapper withdraws-list-wrapper deposit-edit-sec d-none"
                >
                  <div data-v-6c2e4440="" className="custom-container">
                    <div data-v-6c2e4440="" className="cmn-heading">
                      <h1
                        data-v-6c2e4440=""
                        className="tag-heading d-flex justify-content-between"
                      >
                        <Link data-v-6c2e4440="" to="/dashboard" className="">
                          Home
                        </Link>{" "}
                        <img
                          data-v-6c2e4440=""
                          src="https://paymentpay.co/user/images/cross-mark.svg"
                          alt=""
                          style={{ cursor: "pointer" }}
                        />
                      </h1>
                    </div>{" "}
                    <div data-v-6c2e4440="" className="scan-sec">
                      <div data-v-6c2e4440="" className="scan-con">
                        <div data-v-6c2e4440="" className="form-number-sec">
                          <div data-v-6c2e4440="" className="number-header">
                            <label data-v-6c2e4440="">
                              <strong data-v-6c2e4440="">Deposit Stake</strong>
                            </label>{" "}
                            <span
                              data-v-6c2e4440=""
                              className="form-control profit-input"
                            >
                              0
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>{" "}
                <section
                  data-v-6c2e4440=""
                  className="games-wrapper withdraws-list-wrapper"
                >
                  <div data-v-6c2e4440="" className="custom-container">
                    <div data-v-6c2e4440="" className="cmn-heading">
                      <div className="d-w-h-btns">
                        <ul>
                          <li>
                            <Link
                              to="/deposit"
                              aria-current="page"
                              className="router-link-exact-active router-link-active d-w-btn active"
                            >
                              <img
                                src="/user/images/dwh-deposit-icon.svg"
                                alt=""
                              />{" "}
                              <span>Deposit</span>
                            </Link>
                          </li>{" "}
                          <li>
                            <Link to="#Withdraw" className="d-w-btn">
                              <img
                                src="/user/images/dwh-withdraw-icon.svg"
                                alt=""
                              />{" "}
                              <span>Withdraw</span>
                            </Link>
                          </li>{" "}
                          <li>
                            <Link to="#History" className="d-w-btn">
                              <img
                                src="/user/images/dwh-history-icon.svg"
                                alt=""
                              />{" "}
                              <span>History</span>
                            </Link>
                          </li>
                        </ul>
                      </div>{" "}
                      <h1 className="tag-heading d-flex justify-content-between">
                        <img
                          src="/user/images/cross-mark.svg"
                          alt=""
                          style={{ cursor: "pointer" }}
                        />
                      </h1>
                    </div>{" "}
                    <div data-v-6c2e4440="" className="form-number-sec">
                      <div data-v-6c2e4440="" className="row">
                        <div data-v-6c2e4440="" className="col-12">
                          <div data-v-6c2e4440="" className="number-header">
                            <label data-v-6c2e4440="">Amount</label>{" "}
                            <div data-v-6c2e4440="" className="search-input">
                              <input
                                data-v-6c2e4440=""
                                type="number"
                                placeholder="Enter deposit amount"
                                className="form-control profit-input"
                              />{" "}
                              <button data-v-6c2e4440="" type="button">
                                <img
                                  data-v-6c2e4440=""
                                  src="/user/images/search-input-close.png"
                                  alt=""
                                />
                              </button>
                            </div>{" "}
                            <span
                              data-v-6c2e4440=""
                              className="text-danger validation_msg"
                            />{" "}
                            <div
                              data-v-6c2e4440=""
                              className="live-but-sub-con"
                            >
                              <span data-v-6c2e4440="">
                                (Min amount: ₹ 100)
                              </span>
                            </div>
                          </div>
                        </div>{" "}
                        <div data-v-6c2e4440="" className="col-12">
                          <div data-v-6c2e4440="" className="digits-fix-con">
                            <div data-v-6c2e4440="" className="digits-body">
                              <div
                                data-v-6c2e4440=""
                                className="back-bat-btn m-0"
                              >
                                <div
                                  data-v-6c2e4440=""
                                  className="thm-gradient-but"
                                >
                                  <ul data-v-6c2e4440="">
                                    <li data-v-6c2e4440="">
                                      <Link
                                        data-v-6c2e4440=""
                                        to="#"
                                      >
                                        <div
                                          data-v-6c2e4440=""
                                          className="btn-thm"
                                        >
                                          <div
                                            data-v-6c2e4440=""
                                            className="btn-thn-con"
                                          >
                                            <span data-v-6c2e4440="">100</span>
                                          </div>
                                        </div>
                                      </Link>
                                    </li>{" "}
                                    <li data-v-6c2e4440="">
                                      <Link
                                        data-v-6c2e4440=""
                                        to="#"
                                      >
                                        <div
                                          data-v-6c2e4440=""
                                          className="btn-thm"
                                        >
                                          <div
                                            data-v-6c2e4440=""
                                            className="btn-thn-con"
                                          >
                                            <span data-v-6c2e4440="">200</span>
                                          </div>
                                        </div>
                                      </Link>
                                    </li>{" "}
                                    <li data-v-6c2e4440="">
                                      <Link
                                        data-v-6c2e4440=""
                                        to="#"
                                      >
                                        <div
                                          data-v-6c2e4440=""
                                          className="btn-thm"
                                        >
                                          <div
                                            data-v-6c2e4440=""
                                            className="btn-thn-con"
                                          >
                                            <span data-v-6c2e4440="">300</span>
                                          </div>
                                        </div>
                                      </Link>
                                    </li>{" "}
                                    <li data-v-6c2e4440="">
                                      <Link
                                        data-v-6c2e4440=""
                                        to="#"
                                      >
                                        <div
                                          data-v-6c2e4440=""
                                          className="btn-thm"
                                        >
                                          <div
                                            data-v-6c2e4440=""
                                            className="btn-thn-con"
                                          >
                                            <span data-v-6c2e4440="">400</span>
                                          </div>
                                        </div>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                        <div data-v-6c2e4440="" className="col-12">
                          <div data-v-6c2e4440="" className="edit-btn">
                            <button
                              data-v-6c2e4440=""
                              data-bs-toggle="modal"
                              data-bs-target="#editeModal"
                              className="edit-thm-btn"
                            >
                              <img
                                data-v-6c2e4440=""
                                src="/user/images/edit-btn.svg"
                                alt=""
                              />{" "}
                              <span data-v-6c2e4440="">Edit Stake</span>
                            </button>{" "}
                            <div
                              data-v-6c2e4440=""
                              className="thm-modal-btn m-0"
                            >
                              <button
                                data-v-6c2e4440=""
                                className="thm-btn withdrawal_next_btn border-0"
                              >
                                Continue to Deposit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>{" "}
                {/**/} {/**/} {/**/} {/**/} {/**/}
              </div>
            </div>{" "}
            <div
              data-v-6c2e4440=""
              id="ruleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-bs-backdrop="static"
              className="modal rules_modal fade"
            >
              <div
                data-v-6c2e4440=""
                className="modal-dialog thm-modal-sec ruls-modal-sec open-modal-sec modal-dialog-centered modal-dialog-scrollable"
              >
                <div data-v-6c2e4440="" className="modal-content">
                  <div data-v-6c2e4440="" className="modal-header">
                    <div data-v-6c2e4440="" className="thm-heading">
                      <h2 data-v-6c2e4440="">Rule</h2>
                    </div>{" "}
                    <button
                      data-v-6c2e4440=""
                      type="button"
                      className="btn-close"
                    />
                  </div>{" "}
                  <div data-v-6c2e4440="" className="modal-body">
                    <section
                      data-v-6c2e4440=""
                      className="sub-sports-wrapper game-tab-wrapper"
                    >
                      <div data-v-6c2e4440="">
                        <div
                          data-v-6c2e4440=""
                          className="sports-sub-sec sports-inplay-tab"
                        >
                          <ul
                            data-v-6c2e4440=""
                            id="pills-tab"
                            role="tablist"
                            className="nav nav-pills sports-sub-list"
                          >
                            <li
                              data-v-6c2e4440=""
                              role="presentation"
                              className="nav-item sports-sub-item thm-heading"
                            >
                              <button
                                data-v-6c2e4440=""
                                id="pills-english-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-english"
                                type="button"
                                role="tab"
                                aria-controls="pills-english"
                                aria-selected="true"
                                className="nav-link active"
                              >
                                <h3 data-v-6c2e4440="">English</h3>
                              </button>
                            </li>{" "}
                            <li
                              data-v-6c2e4440=""
                              role="presentation"
                              className="nav-item sports-sub-item thm-heading"
                            >
                              <button
                                data-v-6c2e4440=""
                                id="pills-hindi-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-hindi"
                                type="button"
                                role="tab"
                                aria-controls="pills-hindi"
                                aria-selected="false"
                                className="nav-link"
                              >
                                <h3 data-v-6c2e4440="">हिंदी</h3>
                              </button>
                            </li>{" "}
                            <li
                              data-v-6c2e4440=""
                              role="presentation"
                              className="nav-item sports-sub-item thm-heading"
                            >
                              <button
                                data-v-6c2e4440=""
                                id="pills-telugu-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-telugu"
                                type="button"
                                role="tab"
                                aria-controls="pills-telugu"
                                aria-selected="false"
                                className="nav-link"
                              >
                                <h3 data-v-6c2e4440="">ಕನ್ನಡ</h3>
                              </button>
                            </li>{" "}
                            <li
                              data-v-6c2e4440=""
                              role="presentation"
                              className="nav-item sports-sub-item thm-heading"
                            >
                              <button
                                data-v-6c2e4440=""
                                id="pills-Bengali-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-Bengali"
                                type="button"
                                role="tab"
                                aria-controls="pills-Bengali"
                                aria-selected="false"
                                className="nav-link"
                              >
                                <h3 data-v-6c2e4440="">தமிழ்</h3>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </section>{" "}
                    <section data-v-6c2e4440="" className="sports-inplay">
                      <div
                        data-v-6c2e4440=""
                        id="pills-tabContent"
                        className="tab-content"
                      >
                        <div
                          data-v-6c2e4440=""
                          id="pills-english"
                          role="tabpanel"
                          aria-labelledby="pills-english-tab"
                          className="tab-pane fade show active"
                        >
                          <div data-v-6c2e4440="" className="language-list-sec">
                            <ul data-v-6c2e4440="">
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    Deposit money only in the below available
                                    accounts to get the fastest credits and
                                    avoid possible delays.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    Deposits made 45 minutes after the account
                                    removal from the site are valid &amp; will
                                    be added to their wallets.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    Site is not responsible for money deposited
                                    to Old, Inactive or Closed accounts.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    After deposit, add your UTR and amount to
                                    receive balance.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    NEFT receiving time varies from 40 minutes
                                    to 2 hours.
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>{" "}
                        <div
                          data-v-6c2e4440=""
                          id="pills-hindi"
                          role="tabpanel"
                          aria-labelledby="pills-hindi-tab"
                          className="tab-pane fade"
                        >
                          <div data-v-6c2e4440="" className="language-list-sec">
                            <ul data-v-6c2e4440="">
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    सबसे तेज़ क्रेडिट प्राप्त करने और संभावित
                                    देरी से बचने के लिए केवल नीचे दिए गए उपलब्ध
                                    खातों में पैसा जमा करें।
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    साइट से खाता हटाने के 45 मिनट बाद की गई जमा
                                    राशि वैध है और उनके वॉलेट में जोड़ दी जाएगी।
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    साइट पुराने, निष्क्रिय या बंद खातों में जमा
                                    किए गए धन के लिए ज़िम्मेदार नहीं है।
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    जमा करने के बाद, शेष राशि प्राप्त करने के
                                    लिए अपना यूटीआर और राशि जोड़ें।
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    NEFT प्राप्त करने का समय 40 मिनट से लेकर 2
                                    घंटे तक होता है।
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>{" "}
                        <div
                          data-v-6c2e4440=""
                          id="pills-telugu"
                          role="tabpanel"
                          aria-labelledby="pills-telugu-tab"
                          className="tab-pane fade"
                        >
                          <div data-v-6c2e4440="" className="language-list-sec">
                            <ul data-v-6c2e4440="">
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    ವೇಗವಾಗಿ ಹಣ ಜಮವಾಗಲು &amp; ವಿಳಂಬಗಳನು ತಪ್ಪಿಸಲು
                                    ಕೆಳಗಿನ ಲಭ್ಯವಿರುವ ಖಾತೆಗಳಲ್ಲಿ ಮಾತ್ರ ಹಣವನ್ನು
                                    ವರ್ಗಾವಣೆ ಮಾಡಿ.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    ಸೈಟ್ನಿಂದ ಖಾತೆಯನ್ನು ತೆಗೆದುಹಾಕಿದ 45 ನಿಮಿಷಗಳ
                                    ನಂತರ ಮಾಡಿದ ಠೇವಣಿಗಳು ಮಾನ್ಯವಾಗಿರುತ್ತವೆ ಮತ್ತು
                                    ಅವರ ವ್ಯಾಲೆಟ್ಗಳಿಗೆ ಸೇರಿಸಲಾಗುತ್ತದೆ.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    ಹಳೆಯ, ನಿಷ್ಕ್ರಿಯ ಅಥವಾ ಮುಚ್ಚಿದ ಖಾತೆಗಳಿಗೆ ಜಮ
                                    ಮಾಡಿದ ಹಣಕ್ಕೆ ಸೈಟ್ ಜವಾಬ್ದಾರನಾಗಿರುವುದಿಲ್ಲ.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    ಠೇವಣಿ ಮಾಡಿದ ನಂತರ, ಬ್ಯಾಲೆನ್ಸ್ ಪಡೆಯಲು ನಿಮ್ಮ
                                    UTR ಮತ್ತು ಮೊತ್ತವನ್ನು ಬರೆಯಿರಿ.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    NEFT ಸ್ವೀಕರಿಸುವ ಸಮಯವು 40 ನಿಮಿಷಗಳಿಂದ 2
                                    ಗಂಟೆಗಳವರೆಗೆ ಬದಲಾಗುತ್ತದೆ ಆದ್ದರಿಂದ IMPS
                                    ಪಾವತಿಗೆ ಮಾಡಿ.
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>{" "}
                        <div
                          data-v-6c2e4440=""
                          id="pills-Bengali"
                          role="tabpanel"
                          aria-labelledby="pills-Bengali-tab"
                          className="tab-pane fade"
                        >
                          <div data-v-6c2e4440="" className="language-list-sec">
                            <ul data-v-6c2e4440="">
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    விரைவான கிரெடிட்களைப் பெறவும் சாத்தியமான
                                    தாமதங்களைத் தவிர்க்கவும் கீழே உள்ள
                                    கணக்குகளில் மட்டுமே பணத்தை டெபாசிட்
                                    செய்யவும்.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    தளத்தில் இருந்து கணக்கு அகற்றப்பட்ட 45
                                    நிமிடங்களுக்குப் பிறகு செய்யப்படும்
                                    டெபாசிட்கள் செல்லுபடியாகும் &amp; அவர்களின்
                                    பணப்பையில் சேர்க்கப்படும்.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    பழைய, செயலற்ற அல்லது மூடப்பட்ட கணக்குகளில்
                                    டெபாசிட் செய்யப்படும் பணத்திற்கு தளம்
                                    பொறுப்பல்ல.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    டெபாசிட் செய்த பிறகு, உங்கள் UTR மற்றும்
                                    தொகையைச் சேர்த்து சமநிலையைப் பெறுங்கள்.
                                  </span>
                                </div>
                              </li>{" "}
                              <li data-v-6c2e4440="">
                                <div
                                  data-v-6c2e4440=""
                                  className="live-but-sub-con"
                                >
                                  <span data-v-6c2e4440="">
                                    NEFT பெறும் நேரம் 40 நிமிடங்கள் முதல் 2 மணி
                                    நேரம் வரை மாறுபடும்.
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              data-v-6c2e4440=""
              id="ruleModal1"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              className="modal fade"
            >
              <div
                data-v-6c2e4440=""
                className="modal-dialog thm-modal-sec ruls-modal-sec open-modal-sec"
              >
                <div data-v-6c2e4440="" className="modal-content">
                  <div data-v-6c2e4440="" className="modal-header">
                    <div data-v-6c2e4440="" className="thm-heading">
                      <h2 data-v-6c2e4440="">Preview</h2>
                    </div>{" "}
                    <button
                      data-v-6c2e4440=""
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="btn-close"
                    />
                  </div>{" "}
                  <div data-v-6c2e4440="" className="modal-body">
                    <section
                      data-v-6c2e4440=""
                      className="sub-sports-wrapper game-tab-wrapper"
                    >
                      <img data-v-6c2e4440="" src="" />
                    </section>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              data-v-6c2e4440=""
              id="editeModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              className="modal fade"
            >
              <div
                data-v-6c2e4440=""
                className="modal-dialog open-modal-sec thm-modal-sec"
              >
                <div data-v-6c2e4440="" className="modal-content">
                  <div data-v-6c2e4440="" className="modal-header">
                    <div data-v-6c2e4440="" className="thm-heading">
                      <h2 data-v-6c2e4440="">Edit stake</h2>
                    </div>{" "}
                    <button
                      data-v-6c2e4440=""
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="btn-close"
                    />
                  </div>{" "}
                  <div data-v-6c2e4440="" className="modal-body">
                    <div data-v-6c2e4440="" className="back-bat-btn m-0">
                      <div
                        data-v-6c2e4440=""
                        className="thm-gradient-but edit-input-sec"
                      >
                        <ul data-v-6c2e4440="">
                          <li data-v-6c2e4440="">
                            <input
                              data-v-6c2e4440=""
                              type="number"
                              placeholder={+100}
                            />
                          </li>{" "}
                          <li data-v-6c2e4440="">
                            <input
                              data-v-6c2e4440=""
                              type="number"
                              placeholder={+200}
                            />
                          </li>{" "}
                          <li data-v-6c2e4440="">
                            <input
                              data-v-6c2e4440=""
                              type="number"
                              placeholder={+300}
                            />
                          </li>{" "}
                          <li data-v-6c2e4440="">
                            <input
                              data-v-6c2e4440=""
                              type="number"
                              placeholder={+400}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>{" "}
                  <div data-v-6c2e4440="" className="back-thm-modal">
                    <div data-v-6c2e4440="" className="thm-modal-btn w-auto">
                      <Link
                        data-v-6c2e4440=""
                        to="#"
                        data-bs-dismiss="modal"
                        className="thm-btn thm-boder-btn gray-btn"
                      >
                        No
                      </Link>{" "}
                      <Link
                        data-v-6c2e4440=""
                        to="#"
                        className="thm-btn"
                      >
                        Yes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              data-v-6c2e4440=""
              id="withdrawalPassword"
              tabIndex={-1}
              aria-labelledby="withdrawalPasswordLabel"
              aria-hidden="true"
              data-bs-backdrop="static"
              className="modal fade"
            >
              <div
                data-v-6c2e4440=""
                className="modal-dialog modal-dialog-centered"
              >
                <div data-v-6c2e4440="" className="modal-content">
                  <div data-v-6c2e4440="" className="modal-header">
                    <h5 data-v-6c2e4440="" className="modal-title">
                      Update Withdrawal Password
                    </h5>
                  </div>{" "}
                  <div data-v-6c2e4440="" className="modal-body">
                    <div data-v-6c2e4440="" className="cmn-form">
                      <div data-v-6c2e4440="" className="mb-3">
                        <label
                          data-v-6c2e4440=""
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Old Withdrawal Password
                        </label>{" "}
                        <input
                          data-v-6c2e4440=""
                          type="password"
                          id=""
                          placeholder="Old Withdrawal Password"
                          className="form-control"
                        />
                      </div>{" "}
                      <div data-v-6c2e4440="" className="mb-3">
                        <label
                          data-v-6c2e4440=""
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Withdrawal Password
                        </label>{" "}
                        <input
                          data-v-6c2e4440=""
                          type="password"
                          id=""
                          placeholder="Withdrawal Password"
                          className="form-control"
                        />
                      </div>{" "}
                      <div data-v-6c2e4440="" className="mb-3">
                        <label
                          data-v-6c2e4440=""
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Withdrawal Confirm Password
                        </label>{" "}
                        <input
                          data-v-6c2e4440=""
                          type="password"
                          id=""
                          placeholder="Confirm Withdrawal Password"
                          className="form-control"
                        />
                      </div>{" "}
                      <div data-v-6c2e4440="" className="add-acc-model-footer">
                        <div data-v-6c2e4440="" className="modal-footer">
                          <button
                            data-v-6c2e4440=""
                            type="button"
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  </div>
  </div>
  <div id="YfA3E9wPs" role="status" aria-live="polite" aria-atomic="false" />
</section>
  </div>

  
  );
}

export default Deposit;
