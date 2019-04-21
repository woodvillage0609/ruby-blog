class ChangeDataRatingToMaps < ActiveRecord::Migration
  def change
  	change_column :maps, :rating, :float
  end
end
