class Category < ApplicationRecord
  has_many :products, dependent: :destroy

  validates :title, presence: true
  validates :image, presence: true
  validates :code_number, presence: true
end
