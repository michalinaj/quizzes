class Question < ApplicationRecord
  validates :body, presence: true
  belongs_to :quiz
end
