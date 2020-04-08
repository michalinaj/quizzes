class Api::V2::QuestionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def show
    render json: { question: Question.find(params[:id]) }
  end

  def index
    render json: { question: Question.all.where(quiz_id: params[:quiz_id]) }
  end

  def create
    question = Question.new(question_params)
    question.quiz_id =  params[:quiz_id]
    #binding.pry
    if question.save
      render json: { question: question }
    else
      render json: { error: question.errors.full_message }, status: :unprocessable_entity
    end
  end

private
  def question_params
    params.require(:question).permit(:body, :answers, :quiz_id)
  end

end
