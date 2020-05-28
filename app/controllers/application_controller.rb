class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

 protected

  def configure_permitted_parameters
    update_attrs = [:password, :password_confirmation, :current_password, :profile_photo]
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.permit(:account_update, keys: update_attrs)
    devise_parameter_sanitizer.permit(:sign_in) do |user_params|
      user_params.permit(:email, :password, :user_id)
    end
  end

  # def current_user
  #   return unless session[:user_id]
  #   @current_user ||= User.find(session[:user_id])
  # end

 def index 
  @quiz = Quiz.find(params[:id])
  @category = Category.find(params[:id])
 end

end
