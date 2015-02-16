Rails.application.routes.draw do
  devise_for :users
  resources :posts
  root 'pages#home'
  get '/about', to: 'pages#about'
  get '/algorithms', to: 'pages#algorithms'

  get '/bar1', to: 'posts#bar1'
end
