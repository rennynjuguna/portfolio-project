import React, { useState, useEffect } from 'react';
import SkillItem from './SkillItem';
import axios from 'axios';

const SkillList = ({ user }) => {
  const [skills, setSkills] = useState([]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(1);

  const loadSkills = () => {
    axios.get(`/api/users/${user.id}/skills`)
      .then(response => {
        setSkills(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const handleNewSkillNameChange = (event) => {
    setNewSkillName(event.target.value);
  };

  const handleNewSkillLevelChange = (event) => {
    setNewSkillLevel(parseInt(event.target.value));
  };

  const handleAddSkill = () => {
    axios.post(`/api/users/${user.id}/skills`, {
      name: newSkillName,
      level: newSkillLevel
    })
      .then(response => {
        setSkills([...skills, response.data]);
        setNewSkillName('');
        setNewSkillLevel(1);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdateSkill = (updatedSkill) => {
    axios.patch(`/api/users/${user.id}/skills/${updatedSkill.id}`, {
      name: updatedSkill.name,
      level: updatedSkill.level
    })
      .then(response => {
        setSkills(skills.map(skill => {
          if (skill.id === updatedSkill.id) {
            return response.data;
          } else {
            return skill;
          }
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleDeleteSkill = (skillId) => {
    axios.delete(`/api/users/${user.id}/skills/${skillId}`)
      .then(response => {
        setSkills(skills.filter(skill => skill.id !== skillId));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <SkillItem
            key={skill.id}
            skill={skill}
            onUpdate={handleUpdateSkill}
            onDelete={handleDeleteSkill}
          />
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="New skill name"
          value={newSkillName}
          onChange={handleNewSkillNameChange}
        />
        <select value={newSkillLevel} onChange={handleNewSkillLevelChange}>
          <option value="1">Beginner</option>
          <option value="2">Intermediate</option>
          <option value="3">Expert</option>
        </select>
        <button onClick={handleAddSkill}>Add skill</button>
      </div>
    </div>
  );
};

export default SkillList;
