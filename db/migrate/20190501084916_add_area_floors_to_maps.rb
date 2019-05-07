class AddAreaFloorsToMaps < ActiveRecord::Migration
  def change
    add_column :maps, :area, :integer
    add_column :maps, :floor, :integer
  end
end
