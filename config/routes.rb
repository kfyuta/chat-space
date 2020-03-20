Rails.application.routes.draw do
  devise_for :users
  
  root "messages#index"
  resources :users, only: [:edit, :update]
<<<<<<< Updated upstream
=======
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
>>>>>>> Stashed changes
end
