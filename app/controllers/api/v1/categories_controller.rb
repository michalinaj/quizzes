class Api::V1::CategoriesController < ApplicationController

  def index
    if params[:quiz_id]
      quiz = Quiz.find(params[:quiz_id])
      quiz_categories = quiz.categories
      render json: quiz_categories
    else
      categories = Category.all
      render json: categories, include: [:quizzes]
    end
  end

  def show
    @categories = Category.find(params[:id])

    if stale?(last_modified: @categories.updated_at)
      render json: @categories
    end
  end

end
