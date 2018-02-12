Rails.application.routes.draw do
  root 'quizzes#index'
  devise_for :users
  resources :quizzes, only: [:index, :show, :create, :new]
    resources :questions, only: [:new, :create, :show]
      resources :answers, only: [:new, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
