Rails.application.routes.draw do
  root 'quizzes#index'
  devise_for :users
  resources :quizzes, only: [:index, :show, :create, :new, :play] do
    resources :questions, only: [:new, :create, :show, :index]
  end
  resources :categories, only: [:new, :create, :show]

  namespace :api do
    namespace :v1 do
      resources :quizzes, only: [:index, :show] do
        resources :questions, only: [:index, :show]
        # resources :categories, only: [:index, :create]
        end
      resources :categories, only: [:index] do
        resources :quizzes, only: [:index]
        end
      resources :quizzes, only: [:create]
    end
    namespace :v2 do
      resources :quizzes, only: [:index, :show, :create, :new] do
      resources :questions, only: [:index, :show, :create, :new]
      end
    end

  end
end

# get '*path', to: 'static_views#index'
