require 'rails_helper'

RSpec.describe Order, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:amount) }
    it { should validate_presence_of(:buyer_id) }
    it { should validate_presence_of(:purchase) }
  end

  describe 'associations' do
    it { should belong_to(:buyer).class_name('User').with_foreign_key('buyer_id') }
  end

  describe '#purchase' do
    it 'is serialized as JSON' do
      order = Order.new(purchase: [{ product_id: 1, quantity: 2 }])
      expect(order.purchase).to be_a(Array)
    end
  end
end
