require 'sinatra/activerecord'
require 'sinatra/activerecord/rake'
require 'active_record'
require 'yaml'

task :default => :help

desc "Migrate the database to the latest version"
task :db_migrate do
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'db/database.sqlite3'
  )
  ActiveRecord::Migrator.migrate("db/migrate")
end

desc "Roll back the last database migration"
task :db_rollback do
  ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'db/database.sqlite3'
  )
  ActiveRecord::Migrator.rollback("db/migrate")
end
