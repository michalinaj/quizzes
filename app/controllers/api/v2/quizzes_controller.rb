class Api::V2::QuizzesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    quiz = Quiz.find(params[:id])
    render json: { quiz: quiz }
  end

  def index
    render json: { quizzes: Quiz.all }
  end

  def quiz_params
    params.require(:quiz).permit(:name, :categories, :user_id)
  end

end
