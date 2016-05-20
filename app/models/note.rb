class Note < ActiveRecord::Base

	validates :title, presence:true
	validates :content, presence:true
	validates :category, presence:true

	has_attached_file :photo

	validates_attachment :photo, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

	belongs_to :user

	paginates_per 6

end
