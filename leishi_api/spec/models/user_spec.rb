require 'rails_helper'

RSpec.describe User, type: :model do
     subject(:user) { build(:user) }

  describe "validations" do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:password) }
    it { is_expected.to validate_uniqueness_of(:email).ignoring_case_sensitivity }
    it { is_expected.to validate_length_of(:password).is_at_least(6) }
    it { is_expected.to validate_presence_of(:role) }
    it { is_expected.to validate_presence_of(:mobileNo) }
    it { is_expected.to validate_uniqueness_of(:mobileNo).ignoring_case_sensitivity }
    it { is_expected.to validate_length_of(:mobileNo).is_at_least(10).is_at_most(30) }
    it { is_expected.to validate_length_of(:address).is_at_most(500) }    
  end

  describe "associations" do
    it { is_expected.to have_many(:products).with_foreign_key(:seller_id) }
    it { is_expected.to have_many(:orders).with_foreign_key(:buyer_id) }
  end
end