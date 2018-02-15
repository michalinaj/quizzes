Rails.application.routes.draw do
  root 'quizzes#index'
  devise_for :users
  resources :quizzes, only: [:index, :show, :create, :new] do
    resources :questions, only: [:new, :create, :show]
    end
  resources :categories, only: [:new, :create, :show]

  namespace :api do
    namespace :v1 do
      resources :quizzes, only: [:index, :show] do
        resources :categories, only: [:index, :create]
        end
      resources :categories, only: [:index] do
        resources :quizzes, only: [:index]
        end
      resources :quizzes, only: [:create]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
