class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :image
      t.string :title
      t.text :content
      t.string :url
      t.string :source
      t.text :comment

      t.timestamps null: false
    end
  end
end
