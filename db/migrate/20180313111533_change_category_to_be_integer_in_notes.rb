class ChangeCategoryToBeIntegerInNotes < ActiveRecord::Migration
  def change
  	change_column :notes, :category, :integer
  end
end
