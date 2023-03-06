require 'sinatra'
require 'sinatra/activerecord'
require 'bcrypt'

set :database, { adapter: 'sqlite3', database: 'database.sqlite3' }

# Define the user model
class User < ActiveRecord::Base
  has_many :projects
  has_many :skills
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true
  before_save { self.email = email.downcase }
  has_secure_password
end

# Define the project model
class Project < ActiveRecord::Base
  belongs_to :user
end

# Define the skill model
class Skill < ActiveRecord::Base
  belongs_to :user
end

# Set up routes for user authentication
enable :sessions

get '/login' do
  erb :login
end

post '/login' do
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
    redirect '/dashboard'
  else
    erb :login
  end
end

get '/register' do
  erb :register
end

post '/register' do
  user = User.new(params)
  if user.save
    session[:user_id] = user.id
    redirect '/dashboard'
  else
    erb :register
  end
end

get '/logout' do
  session[:user_id] = nil
  redirect '/'
end

# Set up routes for user dashboard
get '/' do
  erb :index
end

get '/dashboard' do
  @user = User.find(session[:user_id])
  erb :dashboard
end
