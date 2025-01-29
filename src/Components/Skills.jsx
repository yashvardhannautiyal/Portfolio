import SkillsList from "../SkillsList";

function Skills() {
  return (
    <div className="skills-container mt-16 pb-10 text-white">
      <div className="text-white font-bold text-4xl sm:text-6xl md:text-8xl flex justify-center">
        <p>SKILLS</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-14">
        {SkillsList.map((skill, index) => (
          <div
            key={index}
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl flex items-center sm:space-x-7 border-3 border-color hover:cursor-pointer hover:border-orange-600"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-8 sm:w-12 h-8 sm:h-12 object-contain"
            />
            <p className="text-sm sm:text-lg sm:font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
