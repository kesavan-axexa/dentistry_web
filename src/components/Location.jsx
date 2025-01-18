import React from "react";

const Location = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="md:mx-16 mx-5 xl:mt-20 lg:mt-6 md:mt-5 mb-16 h-96 rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.884820839625!2d-78.54427528474316!3d35.85412918015509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f504507de69%3A0xb5439eb5b5b5b77b!2s4008%20Mitchell%20Mill%20Rd%20Suite%20108%2C%20Raleigh%2C%20NC%2027616%2C%20USA!5e0!3m2!1sen!2sin!4v1619533276287!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="rounded-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
});

export default Location;
