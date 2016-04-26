class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

has_many :notes
has_many :articles

  devise :database_authenticatable, :registerable,
         :validatable

  has_attached_file :image

  validates_attachment :image, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }
   
end
