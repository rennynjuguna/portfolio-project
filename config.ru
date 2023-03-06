require 'sinatra/base'
require './app'

run Sinatra::Application, server: 'webrick'
