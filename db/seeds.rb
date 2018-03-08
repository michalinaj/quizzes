# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
case Rails.env
when "development"

Category.create!(name: "Languages")
Category.create!(name: "Trivia")
Category.create!(name: "Diet")
Category.create!(name: "Map")
Category.create!(name: "Coding")
Category.create!(name: "Books")

if !User.first
    User.create!(email: Faker::Internet.email, password: "dgfsdfg", username: "Mister")
end

if !Quiz.first
  30.times do
    quiz = Quiz.create!(name: Faker::Lorem.word.capitalize, description: Faker::Lorem.sentences(4).join(' '), category_id: Category.find_by(name: "Books").id, user_id: 5)
    # quiz_categories = []
    # (rand(4) + 1).times do
    #   quiz_categories << Category.order("RANDOM()").first
    # end
    # quiz.categories = quiz_categories.uniq
  end

if !Question.first
  5.times do
    question = Question.create!(body: Faker::Lorem.word.sentences(1), quiz_id: 2, answers: Lorem.sentences(2).join(' '))
  end
end

end

end
