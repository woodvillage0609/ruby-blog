class Article < ActiveRecord::Base

	belongs_to :user
	paginates_per 18

end
