class Quiz < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :questions
end
