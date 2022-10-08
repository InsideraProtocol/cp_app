import React from "react";
import { Card, Image, Spacer, TouchableOpacity } from "../Kit";
import { iban, masterCard, paypal, visa } from "../../assets/icons";
import { Curves } from "../../stylesheet";

const payments = [
  {
    image: masterCard,
  },
  {
    image: iban,
  },
  {
    image: paypal,
  },
  {
    image: visa,
  },
];

export function PaymentTypes() {
  return (
    <Card flexDirection="row" alignItems="center">
      {payments.map((payment) => (
        <>
          <Spacer times={0.5} />
          <TouchableOpacity curve={Curves.sm}>
            <Image source={payment.image} _width="48px" _height="24px" />
          </TouchableOpacity>
          <Spacer times={0.5} />
        </>
      ))}
    </Card>
  );
}
