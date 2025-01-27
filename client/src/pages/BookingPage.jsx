import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import ContactSection from "./MainPageSection/ContactSection";
import TestimonialsSection from "./MainPageSection/TestimonialsSection";
import BenefitsDetailsSection from "./MainPageSection/BenefitsDetailsSection";
import BenefitsSection from "./MainPageSection/BenefitsSection";
import { servicesData } from "../data/servicesData";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(""); // Added state for selected hour
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const hours = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
    "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
  ];

  const handleBooking = () => {
    alert(clientData.name + " - " + clientData.email + " - " + clientData.phone + " - " + clientData.service + " - " + selectedDate + " - " + selectedHour)
  }

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleInputChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        &lt;
      </button>
      <div>{format(currentMonth, "MMMM yyyy")}</div>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        &gt;
      </button>
    </div>
  );

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    const startDate = startOfWeek(startOfMonth(currentMonth));

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-gray-600">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            key={day}
            className={`p-2 h-16 flex justify-center items-center cursor-pointer text-center ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300"
                : isSameDay(day, selectedDate)
                ? "bg-accent text-white rounded-md"
                : "text-black"
            }`}
            onClick={() => handleDateClick(cloneDay)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7" key={day}>{days}</div>);
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="flex flex-col items-center py-20">
      {/* Headline Section */}
      <div className="w-full max-w-6xl mb-8 px-6">
        <h1 className="text-2xl font-bold mb-2 text-accent">Book Your Appointment</h1>
        <p className="text-gray-600">
          Please fill in your details, select a date, and choose an available hour for your appointment.
        </p>
      </div>

      {/* Booking Card */}
      <div className="w-full px-6 flex justify-center items-center">
        <div className="w-full max-w-6xl bg-white border border-gray-300 flex flex-col-reverse lg:flex-row shadow-2xl rounded-3xl overflow-hidden">
          {/* Client Info Section */}
          <div className="flex flex-col flex-1 p-6 border-b lg:border-b-0 lg:border-r border-gray-300">
            <h2 className="text-lg font-semibold mb-4">Client Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={clientData.name}
              onChange={handleInputChange}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={clientData.email}
              onChange={handleInputChange}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={clientData.phone}
              onChange={handleInputChange}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <select
              name="service"
              value={clientData.service}
              onChange={handleInputChange}
              className="p-3 py-6 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent mb-4"
            >
              <option value="" className="text-gray-500 py-6">Select Service</option>
              {servicesData.map((category, index) => (
                <optgroup key={index} label={category.category} className="font-semibold text-gray-700">
                  {category.services.map((service, i) => (
                    <option key={i} value={service.name} className="p-2 hover:bg-gray-100">
                      {service.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            <button
              className="mt-4 py-4 rounded-lg font-heading text-md text-white bg-accent hover:scale-[1.02]"
              onClick={handleBooking}
            >
              Book Call
            </button>
          </div>

          {/* Calendar Section */}
          <div className="flex flex-col flex-1 p-6 border-b lg:border-b-0 lg:border-r border-gray-300">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
          </div>

          {/* Hours Section */}
          <div className="flex flex-col flex-1 overflow-y-auto pb-2 lg:overflow-y-scroll max-h-[350px] md:max-h-[450px]">
            <h2 className="text-lg font-semibold sticky top-0 p-6 text-center z-10 bg-accent text-white">
              Available Hours
            </h2>
            {hours.map((hour, index) => (
              <div
                key={index}
                className={`cursor-pointer p-6 mx-4 rounded-md ${
                  selectedHour === hour ? "bg-accent text-white" : "hover:bg-gray-200"
                } ${index === 0 ? "mt-2" : ""}`}
                onClick={() => handleHourClick(hour)}
              >
                {hour}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-w-full h-fit p-0">
        <BenefitsSection />
        <BenefitsDetailsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default BookingPage;
