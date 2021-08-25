class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :github_link, :youtube_link, :likes, :image

  has_many :favorites
  has_many :users, through: :favorites
end
