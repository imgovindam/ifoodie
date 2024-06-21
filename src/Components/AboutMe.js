import React from "react";

const About = () => {
  return (
    <div className="bg-[#FFEEA9] min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-orange-300 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>iFoodie</strong>, your go-to app for discovering
          and managing your favorite meals! Our mission is to provide an easy
          and enjoyable way for food lovers to explore different cuisines and
          find delicious recipes.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With <strong>iFoodie</strong>, you can browse a wide variety of meal
          categories, view detailed recipes, and even add your favorite dishes
          to a personalized list for quick access. Whether you're looking for a
          quick snack or planning a gourmet dinner, we've got you covered!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our application uses the{" "}
          <a
            href="https://www.themealdb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            TheMealDB API
          </a>{" "}
          to fetch a diverse range of meals from different cuisines. We aim to
          make cooking and meal planning an enjoyable experience for everyone.
        </p>
        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-4">
          Our Team
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We are a group of passionate food enthusiasts and developers who
          believe that good food brings people together. Our team is dedicated
          to constantly improving the app and adding new features to enhance
          your culinary journey.
        </p>
        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          We would love to hear from you! If you have any suggestions, feedback,
          or just want to say hello, feel free to reach out to us at{" "}
          <a
            href="mailto:contact@ifoodie.com"
            className="text-blue-500 underline"
          >
            imgovindam902@gmail.com
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-4">
          Follow Us
        </h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
