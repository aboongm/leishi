require 'rails_helper'

RSpec.describe Product, type: :model do
  describe 'associations' do
    it { is_expected.to belong_to(:category) }
    it { is_expected.to belong_to(:seller).class_name('User').with_foreign_key(:seller_id) }
    # it { is_expected.to have_many(:orders).dependent(:destroy) }
    it { is_expected.to have_many(:buyers).through(:orders).source(:buyer) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:price) }
    it { is_expected.to validate_presence_of(:rating) }
    it { is_expected.to validate_presence_of(:image) }
    it { is_expected.to validate_presence_of(:category_id) }
    it { is_expected.to validate_presence_of(:seller_id) }
  end
end
