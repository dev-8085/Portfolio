export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-32 relative overflow-hidden"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 animate-pulse"></div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-text">
          Welcome to My Portfolio
        </h1>
        <p className="text-2xl mb-8 text-gray-300">
          Showcasing my skills, projects, and achievements
        </p>
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl glow"
        >
          View Projects
        </a>
      </div>

      {/* Glow effect for the button */}
      <style jsx>{`
        .glow {
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.6),
            0 0 40px rgba(124, 58, 237, 0.4);
        }
        .glow:hover {
          box-shadow: 0 0 30px rgba(96, 165, 250, 0.8),
            0 0 50px rgba(124, 58, 237, 0.6);
        }
      `}</style>
    </section>
  );
}
