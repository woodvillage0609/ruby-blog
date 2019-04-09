class MapsController < ApplicationController
  before_action :set_map, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except:[:show, :index]

  # GET /maps
  # GET /maps.json
  def index
    @maps = Map.all

    @hash = Gmaps4rails.build_markers(@maps) do |place, marker|
      marker.lat place.latitude
      marker.lng place.longitude

      #Mapのプロットのウィンドウの表示設定
      marker.infowindow render_to_string(:partial => "/maps/infowindow",   
        :locals => {:name => place.title, :rating => place.rating, :picture =>place.photo, :id =>place.id}) 
    end
    
  end

  # GET /maps/1
  # GET /maps/1.json
  def show

  end

  # GET /maps/new
  def new
    @map = Map.new
  end

  # GET /maps/1/edit
  def edit
  end

  # POST /maps
  # POST /maps.json
  def create
    @map = current_user.maps.build(map_params)
    #user_idと紐付ける為にbuildメソッドを使用

    respond_to do |format|
      if @map.save
        format.html { redirect_to @map, notice: 'Map was successfully created.' }
        format.json { render :show, status: :created, location: @map }
      else
        format.html { render :new }
        format.json { render json: @map.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /maps/1
  # PATCH/PUT /maps/1.json
  def update
    respond_to do |format|
      if @map.update(map_params)
        format.html { redirect_to @map, notice: 'Map was successfully updated.' }
        format.json { render :show, status: :ok, location: @map }
      else
        format.html { render :edit }
        format.json { render json: @map.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /maps/1
  # DELETE /maps/1.json
  def destroy
    @map.destroy
    respond_to do |format|
      format.html { redirect_to maps_url, notice: 'Map was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_map
      @map = Map.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def map_params
      params.require(:map).permit(:title, :rating, :comment, :address, :latitude, :longitude, :photo)
    end
end