const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'JS'] },
    { category: 'Backend', items: ['.Net', 'Java', 'Spring Boot', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'IntelliJ', 'Figma'] },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Communication', 'Team Leadership', 'Agile'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
