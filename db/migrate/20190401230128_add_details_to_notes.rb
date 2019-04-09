class AddDetailsToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :rating, :integer
    add_column :notes, :address, :string
    add_column :notes, :latitude, :float
    add_column :notes, :longitude, :float
    add_column :notes, :user_id, :integer
  end
end
