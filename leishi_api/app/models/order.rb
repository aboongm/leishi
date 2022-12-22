class Order < ApplicationRecord
  # serialize :purchase, Array
  serialize :purchase, JSON

  # belongs_to :product
  belongs_to :buyer, class_name: 'User'
  # belongs_to :seller, class_name: 'User'
 
  validates :amount, presence: true
  validates :buyer_id, presence: true
  validates :purchase, presence: true
end
