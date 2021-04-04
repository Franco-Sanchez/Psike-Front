import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateAppointment } from "../../features/appointment/createAppointmentSlice";

export default function Paypal({ idSchedule, day, psychologist, reason }) {
  const dispatch = useDispatch();
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const token = useSelector((state) => state.session.token);

  

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `Cita con ${psychologist.name} + ${psychologist.lastname}`,
                amount: {
                  currency_code: "USD",
                  value: psychologist.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          var dateObj = new Date(day);
          var monthC = dateObj.getUTCMonth() + 1; //months from 1-12
          var dayC = dateObj.getUTCDate();
          var yearC = dateObj.getUTCFullYear();
          let newdate =
            yearC +
            "-" +
            monthC.toString().padStart(2, 0) +
            "-" +
            dayC.toString().padStart(2, 0);
  
          dispatch(
            fetchCreateAppointment({
              appointment: {
                reason: reason,
                day: newdate,
                paypal_token: data.orderID,
                schedule_id: idSchedule,
                psychologist_id: psychologist.id,
              },
              token: token,
            })
          );
        },
        onError: (err) => {
          setError(err);
        },
      })
      .render(paypalRef.current);
  }, []);

  if (paidFor) {
    return (
      <div>
        <h1>Congrats, you just bought raa!</h1>
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <div ref={paypalRef} />
    </div>
  );
}
