Rails.application.routes.draw do
  devise_for :users
  resources :posts
  root 'posts#index'
  get '/about', to: 'pages#about'
  get '/algorithms', to: 'pages#algorithms'

  mathjax 'mathjax'

  get '/bar1', to: 'posts#bar1'
  get '/bar2', to: 'posts#bar2'
  get '/solutions', to: 'pages#solutions'
end
