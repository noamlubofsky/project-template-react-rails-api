class UsersController < ApplicationController
  wrap_parameters format: []
    skip_before_action :authorize, only: [:create]

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #       render json: @current_user
    #     else
    #       render json: { error: "Not authorized" }, status: :unauthorized
    #     end
    #   end

    def create
        user = User.create(user_params)
        # if user.valid?
        #     session[:user_id] = user.id
          render json: user
          # , status: :created
        # else
        #   render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        # end
      end

    #   def login
    #     user = User.find_by(username:user_params[:username])
    #     if(user && user.authenticate(user_params[:password]))
    #         render json: user
    #     else 
    #         render json: {error: ['incorrect user and/or password']}
    #     end 
    # end 
    
      private
    
      def user_params
        params.permit(:username, :password, :password_confirmation)
      end

end
