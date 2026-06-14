import SkillsList from "../SkillsList";

function Skills() {
  return (
    <div className="skills-container text-white pt-4 pb-10">
      <div className="text-white font-bold text-4xl sm:text-6xl md:text-8xl flex justify-center">
        <p>SKILLS</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-8 px-1 sm:px-6 mt-10 sm:mt-14">
        {SkillsList.map((skill, index) => (
          <div
            key={index}
            className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl flex items-center justify-center sm:space-x-3 border-3 border-color hover:cursor-pointer hover:border-orange-600"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-8 sm:w-14 h-8 sm:h-12 object-contain"
            />
            <p className="text-sm font-semibold md:text-xl sm:font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
