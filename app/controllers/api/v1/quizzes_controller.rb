class Api::V1::QuizzesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    if params[:category_id]
      category = Category.find(params[:category_id])
      category_quizzes = category.quizzes

      render json: quizzes, include: [:categories]
    end
  end

  def show
    @quiz = Quiz.find(params[:id])
  end

  def new
    @quiz = Quiz.new
  end

  def create
    @quiz = Quiz.new(quiz_params)
    @quiz[:user_id] = current_user[:id]
    if @quiz.save
      flash[:message] = "Quiz added successfully"

      uploaded_io = params[:quiz][:quiz_picture]
      if uploaded_io
        File.open(Rails.root.join('public', 'uploads', uploaded_io.original_filename), 'wb') do |file|
        file.write(uploaded_io.read)
        end
      end
      redirect_to @quiz
    else
      render :new
    end
  end

  private

  def quiz_params
    params.require(:quiz).permit(:name, :description, :category_id, :new_category_name, :quiz_picture)
  end

end
