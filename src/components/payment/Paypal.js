import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateAppointment } from "../../features/appointment/createAppointmentSlice";
import { fetchUpdateAppointment } from "../../features/appointment/updateAppointmentSlice";
import { CLIENT_ID, API_KEY, DISCOVERY_DOCS, SCOPES } from "../../app/config";
import { transformTime } from '../../utils/transformTime';
import { resetAppointments } from "../../features/psychologist/showAppointmentsSlice";

export default function Paypal({ schedule, day, psychologist, patient, reason }) {
  const dispatch = useDispatch();
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const tokenSession = useSelector((state) => state.session.token);
  const tokenSignup = useSelector((state) => state.signup.token);
  const appointment = useSelector((state) => state.createAppointment.item);
  const statusCreate = useSelector((state) => state.createAppointment.status);
  const psychologistName = useSelector((state)=>state.showPsychologist.single.name)
  const psychologistLastname = useSelector((state)=>state.showPsychologist.single.lastname)

  const addUrlToTheAppointment = () => {
    let gapi = window.gapi;
    gapi.load("client:auth2", () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("Version!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          let event = {
            summary: `Pskique, cita con psicolog@: ${psychologistName} ${psychologistLastname}`,
            description:
              "Cita generada por Psike para que puedas conectarte con tu psicologo escogido",
            start: {
              dateTime: `${appointment.day}T${transformTime(schedule.hour.start_hour)}:00`,
              timeZone: "America/Lima",
            },
            end: {
              dateTime: `${appointment.day}T${transformTime(schedule.hour.end_hour)}:00`,
              timeZone: "America/Lima",
            },
            attendees: [
              { email: psychologist.email },
              { email: patient.email }
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          let request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          let eventPatch = {
            conferenceData: {
              createRequest: { requestId: "7qxalsvy0e" },
            },
          };

          request.execute(function (event) {
            gapi.client.calendar.events
              .patch({
                calendarId: "primary",
                eventId: `${event.id}`,
                resource: eventPatch,
                sendNotifications: true,
                conferenceDataVersion: 1,
              })
              .execute(function (event) {
                dispatch(
                  fetchUpdateAppointment({
                    token: tokenSession || tokenSignup,
                    id: appointment.id,
                    url: event.htmlLink,
                  })
                );

                dispatch(resetAppointments())
              });
          });
        });
    });
  };

  if (statusCreate === "succeeded") {
    addUrlToTheAppointment();
  }

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
                schedule_id: schedule.id,
                psychologist_id: psychologist.id,
              },
              token: tokenSession || tokenSignup,
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
