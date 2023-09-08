import React from "react";
import foto from '../img/foto.png'

export default function About() {
  return (
    <section id="about" >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" style={{height:"90vh"}}>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-5xl mb-10 font-medium text-gray-900" >
            Hola, soy Omar Roa
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Analista y desarrollador de software.
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
          Soy un programador joven y apasionado de Colombia, desde que descubrí la programación no he dejado de aprender y explorar este fascinante mundo.
          Siempre estoy buscando oportunidades para expandir mis conocimientos y colaborar en proyectos emocionantes. La programación no solo es mi pasión sino también mi forma de vida.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">
              Proyectos
            </a>
            <a
              href="#skills"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 hover:text-white rounded text-lg">
              Habilidades
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={ foto }
          />
        </div>
      </div>
    </section>
  );
}