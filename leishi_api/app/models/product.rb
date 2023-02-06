class Product < ApplicationRecord
  belongs_to :category
  belongs_to :seller, class_name: 'User', foreign_key: :seller_id
  has_many :orders, dependent: :destroy
  has_many :buyers, through: :orders, source: :buyer

  validates :title, presence: true
  validates :price, presence: true
  validates :rating, presence: true
  validates :image, presence: true
  validates :category_id, presence: true
  validates :seller_id, presence: true 
end
