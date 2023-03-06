import React, { useState } from 'react';
import { apiUrl } from '../config';

const ProjectForm = ({ user, onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${apiUrl}/users/${user.id}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, skills }),
    });
    if (response.ok) {
      const project = await response.json();
      onAdd(project);
      setName('');
      setDescription('');
      setSkills([]);
      setSkillInput('');
    }
  };

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleDeleteSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="skills">Skills:</label>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>
              {skill}
              <button onClick={() => handleDeleteSkill(skill)}>X</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          id="skills"
          value={skillInput}
          onChange={(event) => setSkillInput(event.target.value)}
        />
        <button type="button" onClick={handleAddSkill}>
          Add
        </button>
        {skills.length === 10 && <p>You have reached the maximum number of skills.</p>}
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;