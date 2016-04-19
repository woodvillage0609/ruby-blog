class Note < ActiveRecord::Base

	validates :title, presence:true
	validates :content, presence:true
	validates :category, presence:true

	has_attached_file :photo, styles: {medium: "600x600>", thumb: "200x200>" }
	validates_attachment :photo, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

end
