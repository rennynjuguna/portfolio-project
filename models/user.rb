class User < ActiveRecord::Base
    has_many :projects
    has_many :skills
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
    before_save { self.email = email.downcase }
    has_secure_password
  end