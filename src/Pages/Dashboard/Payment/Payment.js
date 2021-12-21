import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51K7hRwIhaSRHEJrSUJUI1vPsbOT4TiEAFejsgDdccbxEwY7apDCzHs3yuT9Hl4hGZAkpJbfOLBa7xCr2u6FW8mJW00fGFvVpSg"
);
const Payment = () => {
  const { paymentid } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${paymentid}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
      });
  }, [paymentid]);
  return (
    <div>
      <h1>Service name: {appointment.serviceName}</h1>
      <h3>Price: ${appointment.price}</h3>
      {appointment.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
