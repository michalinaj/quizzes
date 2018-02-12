class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.belongs_to :category, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
