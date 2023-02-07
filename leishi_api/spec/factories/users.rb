FactoryBot.define do
    factory :user do
       email { Faker::Internet.email }
       password { Faker::Internet.password }
       fullname { Faker::Name.name }
       mobileNo { Faker::PhoneNumber.cell_phone }
       address { Faker::Address.full_address }
       role {'seller'}
    end

end