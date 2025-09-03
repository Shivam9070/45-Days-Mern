const skills = [
{ name: "HTML", proficiency: "Intermediate" },
{ name: "CSS", proficiency: "Advanced" },
{ name: "JavaScript", proficiency: "Beginner" }
];
function formatSkills(skillsArray) {
return skillsArray.map(skill => {
return "${skill.name} (${skill.proficiency})";
});
}
const formattedSkills = formatSkills(skills);
console.log(formattedSkills);

const advancedSkills = skills.filter(skill => skill.proficiency === "Advanced");
console.log(advancedSkills);

const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedSkills);

const skillsWithExperience = skills.map(skill => ({
  ...skill,
  years: Math.floor(Math.random() * 6) + 1 // random 1–6 years
}));
console.log(skillsWithExperience);

const categorized = {
  frontend: skills.filter(s => ["HTML", "CSS", "JavaScript"].includes(s.name)),
  backend: skills.filter(s => ["Node.js", "Express"].includes(s.name))
};
console.log(categorized);

