import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-100 py-16">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Caring for Your Pets, Anytime, Anywhere
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Our online veterinary clinic offers 24/7 care for your furry friends with expert advice, consultations, and more!
          </p>
          <a
            href="#"
            className="bg-blue-600 text-white py-3 px-8 rounded-full font-medium hover:bg-blue-700 transition duration-300"
          >
            Book an Appointment
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Online Vet Clinic"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
