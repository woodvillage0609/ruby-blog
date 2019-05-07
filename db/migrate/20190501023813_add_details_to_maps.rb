class AddDetailsToMaps < ActiveRecord::Migration
  def change
    add_column :maps, :image, :string
    add_column :maps, :url, :string
    add_column :maps, :owner, :string
    add_column :maps, :completion, :string
    add_column :maps, :use, :string
  end
end
