import Logo from "../img/Logo1.png"

export default function Navbar() {
    return (
      <header className="bg-transparent  top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
              <img src={Logo} alt="Logo-Omar" className="w-28"/>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-700	flex flex-wrap items-center text-base justify-center text-white">
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-transparent py-1 px-3 focus:outline-none hover:bg-gray-900 rounded-full text-base mt-4 md:mt-0 border-solid border-4 border-gray-900 text-gray-900 text-xl hover:text-green-500 font-medium">
            ¡Contrátame!
            
          </a>
        </div>
      </header>
    );
  }
