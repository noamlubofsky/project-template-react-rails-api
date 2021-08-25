class Project < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites

    validates :name, presence: true, uniqueness: true
    validates :description, presence: true
    validates :github_link, presence: true, uniqueness: true, format: URI::regexp(%w[http https])

end
  