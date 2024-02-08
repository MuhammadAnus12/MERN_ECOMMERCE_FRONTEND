import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector,  } from "react-redux";

import CheckOutForm from "./CheckOutForm";
import "../Stripe.css";
import { selectCurrentOrder } from "../features/order/orderSlice";


const stripePromise = loadStripe(
  "pk_test_51OW1zQSFU7PwD4zDsirGwyB2FG0lT0Sz6ZXge0QaQbYbAXIlcOsRcv0vPBSPgvEp4L1ver8hOzy955K64PNdRTMT00JTdD0Nd8"
);
export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const currentOrder = useSelector(selectCurrentOrder);
  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmounts: currentOrder.totalAmounts ,orderId:currentOrder.id}),
      
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      )}
    </div>
  );
}
