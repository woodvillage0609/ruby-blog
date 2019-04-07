class AddAttachmentPhotoToMaps < ActiveRecord::Migration
  def self.up
    change_table :maps do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :maps, :photo
  end
end
