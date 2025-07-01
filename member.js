function skillsMember()
{
  return {
    name: "Member",
    description: "A member of the team with specific skills.",
    skills: ["JavaScript", "React", "Node.js"],
    experience: 5, // years
    role: "Developer",
    isActive: true,
    getDetails() {
      return `${this.name} is a ${this.role} with ${this.experience} years of experience in ${this.skills.join(", ")}.`;
    }
  };
}
