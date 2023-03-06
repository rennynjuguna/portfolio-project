import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { UserContext } from './UserContext';
import { PrivateRoute } from './components/PrivateRoute';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SkillList from './components/SkillList';
import { apiUrl } from './config';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`${apiUrl}/user`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div>
          <Header />
          <PrivateRoute exact path="/" component={ProjectList} />
          <PrivateRoute exact path="/projects" component={ProjectList} />
          <PrivateRoute exact path="/projects/new" component={ProjectForm} />
          <PrivateRoute exact path="/projects/:id/edit" component={ProjectForm} />
          <PrivateRoute exact path="/skills" component={SkillList} />
          </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
