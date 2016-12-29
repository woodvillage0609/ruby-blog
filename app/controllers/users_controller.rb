class UsersController < ApplicationController

	before_action :set_user, only: [:show, :edit, :update]
	before_action :authenticate_user!, except: [:index]

	def show
    @users = User.all
    render 'index'
	end

  def index
    @users = User.all
  end

	def edit
	end

	def update

		respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'Profile was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
	end

private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :name, :image, :profile, :password)
    end

end
