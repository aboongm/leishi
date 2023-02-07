require 'faker'

FactoryBot.define do
  factory :order do
    amount { Faker::Number.decimal(l_digits: 2) }
    buyer
    purchase { build_list(:order_purchase, Faker::Number.number(digits: 1)) }

    factory :order_from_buyer do
      association :buyer, factory: :user, role: 'buyer'
    end
    trait :buyer do
        association :buyer, factory: :user
    end
  end

  factory :order_purchase do
    product
    quantity { Faker::Number.number(digits: 1) }
  end
end
