import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { BsGeoAltFill } from "react-icons/bs"; // Icon for the marker

// Custom marker icon using an image
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with a desired URL
  iconSize: [40, 40], // Size of the icon
  iconAnchor: [20, 40], // Anchor of the icon (to center it)
  popupAnchor: [0, -40], // Position of the popup relative to the icon
});

const ContactSection = () => {
  return (
    <div className="relative w-full py-[250px] px-20 bg-neutral-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 left-20 text-primary opacity-20 text-8xl">
        <BsGeoAltFill />
      </div>
      <div className="absolute bottom-10 right-20 text-secondary opacity-20 text-9xl rotate-12">
        <BsGeoAltFill />
      </div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[200px] h-[200px] bg-primary opacity-10 rounded-full"></div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Map Section */}
        <div className="w-full md:w-[60%] h-[600px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[40.7128, -74.006]} // Example: New York City
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Custom Marker */}
            <Marker position={[40.7128, -74.006]} icon={customIcon}>
              <Popup>
                Our Clinic is located here! <br /> Feel free to visit us.
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-[40%] flex justify-center items-start bg-transparent p-8">
          <div className="w-full h-[450px] flex flex-col justify-between">
            <div className="flex flex-col justify-start border-b border-secondary">
              <h2 className="text-5xl font-heading font-bold text-left text-accent mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-left text-gray-600 mb-10">
                Get in touch with us! You can find our clinic location, hours,
                and contact information below.
              </p>
            </div>
            <div className="border-b border-secondary py-4">
              <p className="text-lg text-gray-600">
                <strong>Address:</strong>
                <br /> 123 Main Street, New York, NY 10001
              </p>
            </div>
            <div className="border-b border-secondary py-4">
              <p className="text-lg text-gray-600">
                <strong>Phone:</strong>
                <br /> (123) 456-7890
              </p>
            </div>
            <div className="border-b border-secondary py-4">
              <p className="text-lg text-gray-600">
                <strong>Email:</strong>
                <br /> contact@ourclinic.com
              </p>
            </div>
            <div className="py-4">
              <p className="text-lg text-gray-600">
                <strong>Hours:</strong>
                <br /> Monday To Friday: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

