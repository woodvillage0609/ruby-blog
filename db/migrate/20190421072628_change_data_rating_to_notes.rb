class ChangeDataRatingToNotes < ActiveRecord::Migration
  def change
  	change_column :notes, :rating, :float
  end
end
