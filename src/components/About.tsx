const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              "I’m an undergraduate at the University of Jaffna, Faculty of Technological Studies,
              Department of ICT. I have a strong interest in web technologies, and I’m passionate
              about building efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My journey in tech began with a curiosity about how things work on the web, which has
              now evolved into a focused academic pursuit, aiming to help businesses and
              organizations achieve their goals through technology."
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">1 years</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Projects</h3>
                <p className="text-gray-600 dark:text-gray-300">10+ completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
