require 'rails_helper'

RSpec.describe "Orders", type: :request do
  let!(:user) { create(:user) }
  # let!(:order) { create(:order, buyer: user) }
  # let(:valid_attributes) {
  #   { buyer_id: user.id, amount: Faker::Number.decimal(l_digits: 2), purchase: [ {product_id: create(:product).id, quantity: Faker::Number.number(digits: 1)} ] }
  # }
  # let(:invalid_attributes) {
  #   { buyer_id: nil, amount: nil, purchase: nil }
  # }
  before do
    sign_in user
  end

  describe "GET /orders" do
    context "from login user" do
        it "should return 200:OK" do
            get orders_path
            expect(response).to have_http_status(:success)
          end

        # it "returns a list of all orders" do
        #   get orders_path
        #   json = JSON.parse(response.body)
        #   expect(json.count).to eq(1)
        # end          
    end
  end
  # describe "POST /orders" do
  #   context "with valid parameters" do
  #     it "creates a new order" do
  #       expect {
  #         post orders_path, params: { order: valid_attributes }
  #       }.to change(Order, :count).by(1)
  #     end

  #     it "returns a success response" do
  #       post orders_path, params: { order: valid_attributes }
  #       expect(response).to be_successful
  #     end
  #   end

  #   context "with invalid parameters" do
  #     it "does not create a new order" do
  #       expect {
  #         post orders_path, params: { order: invalid_attributes }
  #       }.to change(Order, :count).by(0)
  #     end

  #     it "returns an error response" do
  #       post orders_path, params: { order: invalid_attributes }
  #       expect(response).to have_http_status(:unprocessable_entity)
  #     end
  #   end
  # end 
end