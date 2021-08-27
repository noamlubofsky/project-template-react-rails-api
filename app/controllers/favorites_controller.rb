class FavoritesController < ApplicationController
    skip_before_action :authorize

    def index
        favorites = Favorites.all
        render json: favorites
    end

    def create
        favorite = Favorite.create(favorite_params)
        render json: favorite
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
    end

    private

    def favorite_params
        params.permit(:user_id, :project_id)
    end
end
