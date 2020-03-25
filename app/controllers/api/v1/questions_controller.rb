class Api::V1::QuestionsController < ApplicationController

  def show
    @quiz = Quiz.find(params[:quiz_id])
    render json: { question: Question.find(params[:id]) }
  end

  def index
    render json: { question: Question.all }
  end

  def question_params
    params.require(:question).permit(:body, :answers)
  end

end
