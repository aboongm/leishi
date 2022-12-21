class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]
  # before_action :authenticate_user!, only: [:create, :update, :destroy]

  # GET /orders
  def index
    @orders = Order.all
    # @orders = current_user.orders
    # @orders = Order.where(buyer_id: current_user.id)

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    # @order = Order.new(order_params)   
    # @order = Order.new(buyer_id: params[:buyer_id], amount: params[:amount], purchase: [ {
            
    #     title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    #     price: 1094.98,
    #     rating: 4,
    #     image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    #     category_id: 2,
    #     seller_id: 3,
    #     id: 6 
    #   }])
    @order = Order.new(buyer_id: params[:buyer_id], amount: params[:amount], purchase: params[:purchase])

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      # params.require(:order).permit(:amount, :buyer_id, :purchase)
      params.require(:order).permit(:id, :buyer_id, :amount, :purchase => [ :id, :title, :price, :rating, :image, :category_id, :seller_id])
    end
end
