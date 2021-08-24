class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :github_link
      t.string :youtube_link
      t.integer :likes
      t.binary :image

      t.timestamps
    end
  end
end
