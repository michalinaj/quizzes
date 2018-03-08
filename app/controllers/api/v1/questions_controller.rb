class Api::V1::QuestionsController < ApplicationController

  def show
    @question = Question.find(params[:quiz_id])
    render json: @question
  end

  def index
    render json: Question.all
  end

end
