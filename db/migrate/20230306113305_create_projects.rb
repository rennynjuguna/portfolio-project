class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :url
      t.references :user, foreign_key: true
      t.timestamps null: false
    end
  end
end
