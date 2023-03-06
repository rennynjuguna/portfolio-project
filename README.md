# Portfolio Project
This project is a web application that allows users to create a portfolio of their projects and skills using React on the frontend and Ruby with ActiveRecord and Sinatra on the backend.

## Installation
To run this application, follow these steps:

- Clone this repository
- Navigate to the backend folder and run `bundle install` to install the required gems
- Create the database by running `rake db:create`
- Run the database migrations by running `rake db:migrate`
- Seed the database with sample data by running `rake db:seed`
- Start the backend server by running `ruby app.rb`
- Navigate to the frontend folder and run `npm install` to install the required packages
- Start the frontend server by running `npm start`
- Navigate to http://localhost:3000 in your browser to use the application

## Features
This application includes the following features:

- User authentication: users can register and log in to the platform
- View projects: users can view all their listed projects
- Add projects: users can add a new project to their portfolio
- Update projects: users can update existing project data
- Delete projects: users can delete a project
- Skills limit: users can have a maximum of 10 skills
- View skills: users can view their listed skills
- Add skills: users can add new skills
- Update skills: users can update their skills
- Delete skills: users can delete skills

## Contributing
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License
The application is available as open source under the terms of the MIT License.
