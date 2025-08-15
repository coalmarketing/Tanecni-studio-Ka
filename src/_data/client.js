module.exports = {
  name: "Taneční studio Ká",
  email: "motyckovakaterina@gmail.com",
  ico: "05273951",
  phoneForTel: "+420777621941",
  phoneFormatted: "+420 777 621 941",
  address: {
    lineOne: "F. V. Heka 874",
    city: "Letohrad",
    zip: "56151",
    mapLink: "https://maps.app.goo.gl/gp7crA3tSmsjRtXF9",
  },
  socials: {
    facebook: "https://www.facebook.com/TanecniStudioKa/",
    instagram: "https://www.instagram.com/tanecnistudio_ka/"
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://tanecnistudioka.cz",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};