User.create(name: 'John Doe', email: 'john@example.com', password: 'password')
Project.create(title: 'My First Project', description: 'This is my first project.', url: 'https://example.com', user_id: 1)
Skill.create(name: 'React', user_id: 1)
Skill.create(name: 'Ruby', user_id: 2)
