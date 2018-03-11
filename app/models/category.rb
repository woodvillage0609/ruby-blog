class Category < ActiveRecord::Base

	has_many :notes
	#これって不要かもしれない。

end
