import React from 'react';

const SkillItem = ({ skill, onUpdateSkill, onDeleteSkill }) => {
  const handleUpdateSkill = () => {
    const newSkillName = prompt('Enter the new skill name', skill.name);
    if (newSkillName) {
      onUpdateSkill(skill.id, newSkillName);
    }
  };

  const handleDeleteSkill = () => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      onDeleteSkill(skill.id);
    }
  };

  return (
    <div className="skill-item">
      <p>{skill.name}</p>
      <div>
        <button onClick={handleUpdateSkill}>Edit</button>
        <button onClick={handleDeleteSkill}>Delete</button>
      </div>
    </div>
  );
};

export default SkillItem;
