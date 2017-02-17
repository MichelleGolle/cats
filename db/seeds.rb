class Seed
  attr_reader :seed
  def initialize
    @seed
  end

  def run
    generate_cats
  end

  def generate_cats
    50.times do
      cat = Cat.new
      cat.name = Faker::Cat.name
      cat.breed = Faker::Cat.breed
      cat.save!
      puts "Generated cat # #{cat.id}"
    end
  end
end

seed = Seed.new
seed.run
