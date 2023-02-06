class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  has_many :products, foreign_key: :seller_id, dependent: :destroy
  has_many :orders, foreign_key: :buyer_id, dependent: :destroy
    
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  validates :fullname, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :role, presence: true
  validates :mobileNo, presence: true, uniqueness: true, length: { minimum: 10, maximum: 30 }
  validates :address, length: { maximum: 500 }


  ROLES = %w{admin buyer seller shipper}
  ROLES.each do |role_name|
    define_method "#{role_name}?" do
      role == role_name
    end
  end
  
  def jwt_payload
    super
  end
end
