class ChangeCategoryToBeStringInNotes < ActiveRecord::Migration
  def change
  	change_column :notes, :category, :string
  end
end
