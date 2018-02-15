class AddQuizNameAndDescriptionToQuizzes < ActiveRecord::Migration[5.1]
  def change
    add_column :quizzes, :name, :string
    add_column :quizzes, :description, :string
    add_column :quizzes, :quiz_picture, :string
  end
end
