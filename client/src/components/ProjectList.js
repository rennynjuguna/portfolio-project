import React, { useEffect, useState } from 'react';
import { apiUrl } from '../config';

const ProjectList = ({ user }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(`${apiUrl}/users/${user.id}/projects`);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    };
    fetchProjects();
  }, [user.id]);

  const handleDelete = async (project) => {
    const response = await fetch(`${apiUrl}/projects/${project.id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setProjects(projects.filter((p) => p.id !== project.id));
    }
  };

  return (
    <div>
      <h2>My Projects </h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} ({project.skills.join(', ')})
            <button onClick={() => handleDelete(project)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProjectList;
