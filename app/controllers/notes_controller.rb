class NotesController < ApplicationController
  before_action :set_note, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, except: [:show, :index, :notes_by_month, :notes_by_category, :notes_by_photo, :notes_by_photo_order, :notes_by_photo_random]
  before_action :category_split, only: [:show, :index, :notes_by_month, :notes_by_category]
  # GET /notes
  # GET /notes.json
  def index
    @notes = Note.page(params[:page]).per(7).order(created_at: :desc)
    @notes_by_month = Note.all.order(created_at: :desc).group_by { |note| note.created_at.beginning_of_month }
    @notes_recent = Note.all.limit(5).order(created_at: :desc)
  end

  def notes_by_month
    @notes = Note.page(params[:page]).where( "YEAR(created_at) = ? AND MONTH(created_at) = ? ", params[:year], params[:month]).order("created_at DESC")
    @notes_by_month = Note.all.order(created_at: :desc).group_by { |note| note.created_at.beginning_of_month }
    @notes_recent = Note.all.limit(5).order(created_at: :desc)
    @categories = Note.group(:category).count(:category)
    render 'index'
  end

  def notes_by_category
    @notes = Note.page(params[:page]).where("category = ?", params[:id]).order(created_at: :desc)
    @notes_by_month = Note.all.order(created_at: :desc).group_by { |note| note.created_at.beginning_of_month }
    @notes_recent = Note.all.limit(5).order(created_at: :desc)
    render 'index'
  end

  def notes_by_photo
    @notes = Note.page(params[:page]).per(18).where.not(category: "メモ").order(created_at: :desc)
  end

  def notes_by_photo_order
    @notes = Note.all.where.not(category: "メモ").order(created_at: :desc)
  end

  def notes_by_photo_random
    @notes = Note.all.where.not(category: "メモ").order("RAND()")
  end

  # GET /notes/1
  # GET /notes/1.json
  def show
    @random_notes=Note.where.not(id:@note).where.not(category: "メモ").order("RAND()")
    @notes_by_month = Note.all.order(created_at: :desc).group_by { |note| note.created_at.beginning_of_month }
    @notes_recent = Note.all.limit(5).order(created_at: :desc)
  end

  # GET /notes/new
  def new
    @note = Note.new
  end

  # GET /notes/1/edit
  def edit
  end

  # POST /notes
  # POST /notes.json
  def create
    @note = Note.new(note_params)

    respond_to do |format|
      if @note.save
        format.html { redirect_to @note, notice: 'Note was successfully created.' }
        format.json { render :show, status: :created, location: @note }
      else
        format.html { render :new }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /notes/1
  # PATCH/PUT /notes/1.json
  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_to @note, notice: 'Note was successfully updated.' }
        format.json { render :show, status: :ok, location: @note }
      else
        format.html { render :edit }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /notes/1
  # DELETE /notes/1.json
  def destroy
    @note.destroy
    respond_to do |format|
      format.html { redirect_to notes_url, notice: 'Note was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def note_params
      params.require(:note).permit(:title, :content, :category, :photo)
    end

    # カテゴリー一覧の加工作業。２区分に分けるべく、where, where.notで調整。
    def category_split
      @categories = Note.where.not(["(category= ?) OR (category= ?)", "食べ物","メモ"]).group(:category).count(:category)
      @category_others = Note.where(["(category= ?) OR (category= ?)", "食べ物","メモ"]).group(:category).count(:category)
    end

end
