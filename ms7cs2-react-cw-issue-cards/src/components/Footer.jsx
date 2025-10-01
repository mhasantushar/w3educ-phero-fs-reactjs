import React from "react";

const Footer = () => {
  return (
    <section className="bg-black mt-12 py-12 text-white">
      <div className="justify-between gap-12 grid grid-cols-5 mx-auto container">
        <div className="text-base/relaxed">
          <h4 className="mb-4 font-semibold text-lg">PH — Assignment System</h4>
          <p>
            PH Assignment system is a platform that centralizes, tracks, and
            manages requests or issues, converting them into unique "Assignment
            s" for efficient resolution and communication
          </p>
        </div>

        <div className="text-base/relaxed">
          <h4 className="mb-4 font-semibold text-lg">University</h4>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Administrator</li>
          </ul>
        </div>

        <div className="text-base/relaxed">
          <h4 className="mb-4 font-semibold text-lg">Services</h4>
          <ul>
            <li>Education & Services</li>
            <li>Student Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div className="text-base/relaxed">
          <h4 className="mb-4 font-semibold text-lg">Information</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div className="text-base/relaxed">
          <h4 className="mb-4 font-semibold text-lg">Seecial Links</h4>
          <ul>
            <li>@Ph — Assignment System</li>
            <li>@Ph — Assignment System</li>
            <li>@Ph — Assignment System</li>
            <li>support@ph.com</li>
          </ul>
        </div>
      </div>

      <p className="mt-12 text-gray-400 text-center">
        © 2025 Ph — Assignment System. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
