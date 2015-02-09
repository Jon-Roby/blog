Rails.application.routes.draw do
  devise_for :users
  resources :posts
  root 'posts#index'
  get '/about', to: 'pages#about'
  get '/algorithms', to: 'pages#algorithms'
end
