class ReviewsController < ApplicationController
  def create

  	@map = Map.find(params[:map_id])
	@review = @map.reviews.create(review_params)
	@review.map_id = @map.id

	if @review.save
		redirect_to map_path(@map)
	else
		render 'new'
	end

  end

  def destroy

  	@map = Map.find(params[:map_id])
	@review = @map.reviews.find(params[:id])
	@review.destroy

	redirect_to map_path(@map)

  end

  private

	def review_params
	
	params.require(:review).permit(:body, :name, :rating)
	
	end 


end
