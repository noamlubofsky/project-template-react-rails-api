Rails.application.routes.draw do
  
  resources :posts
  resources :favorites, only: [:index, :show, :create, :update, :destroy]
  resources :projects, only: [:index, :show, :create]
  resources :users, only: [:create, :show]
  resources :sessions, only: [:index, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#destroy"
  get "/projects", to: "projects#index"
  patch "/projects/:id/like", to: "projects#increment_likes"
  patch "/projects/:id/unlike", to: "projects#decrement_likes"

end
