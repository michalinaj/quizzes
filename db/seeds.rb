# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#case Rails.env
#when "development"

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
  end
end

questions = Question.create!(
  [
    { quiz_id: 1,
      body: "What is the meaning of life?",
      answers: "no clue"
    },

    { quiz_id: 1,
      body: "How many hearts does an octopus have?",
      answers: "Three"
    },

    { quiz_id: 1,
      body: "Which bone are babies born without?",
      answers: "Knee cap"
    },

    { quiz_id: 1,
      body: "Which country produces the most coffee in the world?",
      answers: "Brazil"
    },

    { quiz_id: 1,
      body: "What does BMW stand for (in English)?",
      answers: "Bavarian Motor Works"
    },

    { quiz_id: 1,
      body: "Which planet is the hottest in the solar system?",
      answers: "Venus"
    },

    { quiz_id: 1,
      body: "Which is the only American state to begin with the letter 'p'?",
      answers: "Pennsylvania"
    },

    { quiz_id: 1,
      body: "Which actress has won the most Oscars?",
      answers: "Katharine Hepburn"
    },

    { quiz_id: 1,
      body: "Name the three primary colours",
      answers: "Red, yellow and blue"
    }

  ]
)

end
