import { EnvelopeIcon } from "@heroicons/react/24/solid";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3c5o9qk', 'template_lmk7d4q', form.current, 'HSnnwV8IqJ8jWi-ed')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <form ref={form}
        onSubmit={sendEmail}
        className="container px-5 py-10 mx-auto sm:w-1/3">
        <div className="text-center mb-5 ">
          <EnvelopeIcon className="w-20 inline-block mb-4" />
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contáctame
          </h2>
          <p className="leading-relaxed text-xl mb-5">
            Envíame un mensaje, si deseas que haga parte de tu proyecto.
          </p>
        </div>
        <div className="text-center mb-4">
          <div className="relative mb-4">
            <label className="leading-7 text-xl text-gray-400">Nombre</label>
            <input
              type="text"
              name="user_name"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-xl text-gray-400">Correo Electronico</label>
            <input
              type="email"
              name="user_email"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-xl text-gray-400">Mensaje</label>
            <textarea
              name="message"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:border-4 hover:border-green-500  rounded text-lg">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;