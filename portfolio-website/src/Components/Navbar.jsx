export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
