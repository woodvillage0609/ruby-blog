class Map < ActiveRecord::Base

	has_attached_file :photo
	validates_attachment :photo, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif" ] }

	geocoded_by :address
    after_validation :geocode

    belongs_to :user
    has_many :reviews, dependent: :destroy

end
