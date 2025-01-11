export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-500">
          My Portfolio
        </h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-white hover:text-gray-300 relative group transition-all duration-300"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-gray-300 relative group transition-all duration-300"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 relative group transition-all duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
