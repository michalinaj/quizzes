class Api::V1::QuestionsController < ApplicationController

  def show
    @question = Question.find(params[:quiz_id])
    render json: {question: @question}
  end

  def index
    render json: Question.all
  end

  def question_params
    params.require(:question).permit(:body, :answers)
  end

end
