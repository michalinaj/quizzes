class AddAnswersToQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :answer_id, :bigint, null: false
    add_foreign_key :questions, :answers
  end
end
