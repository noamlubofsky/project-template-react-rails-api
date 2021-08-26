class FavoritesController < ApplicationController

    def index
        favorites = Favorites.all
        render json: favorites
    end
end
