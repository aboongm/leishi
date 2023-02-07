require 'rails_helper'

RSpec.describe ProductsController, type: :request do
  let!(:category) { create(:category) }
  let!(:seller) { create(:user, role: 'seller') } 
  let!(:products) { create_list(:product, 10, category: category, seller: seller) }
  let!(:product_id) { products.first.id }

  describe "GET /products" do
    it "returns status code 200" do
      get products_path

      expect(response).to have_http_status(200)
    end

    it "returns a list of products" do
      get products_path

      json = JSON.parse(response.body)
      expect(json.size).to eq(10)
    end
  end

  describe "GET /products/:id" do
    it "returns status code 200" do
      get "/products/#{product_id}"

      expect(response).to have_http_status(200)
    end

    it "returns the correct product" do
      get "/products/#{product_id}"

      json = JSON.parse(response.body)
      expect(json["id"]).to eq(product_id)
    end
  end

  describe "POST /products" do
    let(:valid_attributes) { { title: "New Product", price: 20.0, rating: 3, image: "https://somerandomimage.jpg", category_id: category.id, seller_id: seller.id } }

    context "with valid parameters" do
      it "creates a new product" do
        expect {
          post "/products", params: { product: valid_attributes }
        }.to change(Product, :count).by(1)
      end

      it "returns status code 201" do
        post "/products", params: { product: valid_attributes }

        expect(response).to have_http_status(201)
      end

      it "returns the created product" do
        post "/products", params: { product: valid_attributes }

        json = JSON.parse(response.body)
        expect(json["title"]).to eq("New Product")
        expect(json["price"]).to eq("20.0")
        expect(json["rating"]).to eq(3)
        expect(json["image"]).to eq("https://somerandomimage.jpg")
        expect(json["category_id"]).to eq(category.id)
        expect(json["seller_id"]).to eq(seller.id)
      end
    end

    context "with invalid parameters" do
      let(:invalid_attributes) { { title: nil, price: 20.0, rating: 3, image: "https://somerandomimage.jpg", category_id: category.id, seller_id: seller.id } }

      it "returns status code 422" do
        post "/products", params: { product: invalid_attributes }

        expect(response).to have_http_status(422)
      end
    end
  end

  describe "PUT /products/:id" do
    let(:valid_attributes) { { title: "Updated Product", price: 30.0, rating: 4, image: "https://somerandomimage2.jpg" } }

    context "with valid parameters" do
      it "updates the product" do
        put "/products/#{product_id}", params: { product: valid_attributes }

        json = JSON.parse(response.body)
        expect(json["title"]).to eq("Updated Product")
        expect(json["price"]).to eq("30.0")
        expect(json["rating"]).to eq(4)
        expect(json["image"]).to eq("https://somerandomimage2.jpg")
      end

      it "returns status code 200" do
        put "/products/#{product_id}", params: { product: valid_attributes }

        expect(response).to have_http_status(200)
      end
    end

    context "with invalid parameters" do
      let(:invalid_attributes) { { title: nil, price: 30.0, rating: 4, image: "https://somerandomimage2.jpg" } }

      it "returns status code 422" do
        put "/products/#{product_id}", params: { product: invalid_attributes }

        expect(response).to have_http_status(422)
      end
    end
  end

  describe "DELETE /products/:id" do
    # needs to change the association between product and order.
    # ORDER HAS MANY PRODUCTS. A PRODUCT CAN BELONG TO MANY ORDERS.
    # it "deletes the product" do
    # expect {
    # delete "/products/#{product_id}"
    # }.to change(Product, :count).by(-1)
    # end

    # it "returns status code 204" do
    #   delete "/products/#{product_id}"

    #   expect(response).to have_http_status(204)
    # end
  end
end
