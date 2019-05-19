class AddMapIdToReviews < ActiveRecord::Migration
  def change
    add_column :reviews, :map_id, :integer
  end
end
