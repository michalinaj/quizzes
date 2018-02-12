class AddQuestionToQuizzes < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :quiz_id, :bigint, null: false
    add_foreign_key :questions, :quizzes
  end
end
