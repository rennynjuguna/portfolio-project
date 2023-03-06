class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.string :name
      t.references :user, foreign_key: true
      t.timestamps null: false
    end
  end
end
