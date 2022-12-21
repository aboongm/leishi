Rails.application.routes.draw do
  resources :orders
  resources :categories
  resources :products
  devise_for :users, 
  path: '', 
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
  }
  get "/member_details" => "members#home"
end
