# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Favorite.destroy_all

10.times do
    User.create(
        username: Faker::Internet.username,
        password_digest: Faker::Internet.password(min_length: 10, max_length: 20, mix_case: true, special_characters: true) #=> "*%NkOnJsH4"

    )
end

10.times do
    Favorite.create(
      user_id: rand(1..10),
      project_id: rand(1..10)
    )
  end

10.times do
    Project.create(
        name: Faker::Name.name,
        description: Faker::Lorem.paragraphs(sentence_count: rand(2..8))
        github_link: Faker::Internet.url(host: 'github'),
        youtube_link: Faker::Internet.url(host: 'youtube'),
        likes: rand(1..100),
        # image: Faker::image 
    )
end

