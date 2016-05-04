class Note < ActiveRecord::Base

	validates :title, presence:true
	validates :content, presence:true
	validates :category, presence:true

	has_attached_file :photo, 
		:storage => :s3,
    	:s3_credentials => "#{Rails.root}/config/s3.yml",
    	:path => ":attachment/:id/:style.:extension"
  
	validates_attachment :photo, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

	belongs_to :user

end
