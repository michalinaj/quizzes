class Api::V1::QuestionsController < ApplicationController

  def show
    # render json: { question: Question.find(params[:id]) }
    render json: { question: Question.all.sample }
  end

  def index
    render json: { question: Question.all }
  end

  def question_params
    params.require(:question).permit(:body, :answers)
  end

end
