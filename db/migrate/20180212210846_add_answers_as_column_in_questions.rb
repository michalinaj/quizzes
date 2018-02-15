class AddAnswersAsColumnInQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :answers, :string, null: false
  end
end
