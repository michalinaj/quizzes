class CategoriesController < ApplicationController

  def show
    @quiz = Quiz.find(params[:id])
    @category = Category.find(params[:id])
  end

end
