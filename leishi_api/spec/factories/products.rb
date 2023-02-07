FactoryBot.define do
    factory :product do
        title { Faker::Commerce.product_name }
        price { Faker::Commerce.price }
        rating { 3 }
        image { "https://somerandomimage.jpg" }
        category_id { 20 }
        seller_id { 10 }       
    end
end