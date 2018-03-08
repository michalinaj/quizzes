class Api::V1::QuizzesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    render json: { quizzes: Quiz.all }
  end

  def show
    @quiz = Quiz.find(params[:id])
    render json: { quiz: @quiz }
  end

end
