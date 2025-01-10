export default function Hero() {
  return (
    <section id="home" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">
          Showcasing my skills, projects, and achievements
        </p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
