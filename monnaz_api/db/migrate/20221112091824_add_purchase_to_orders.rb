class AddPurchaseToOrders < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :purchase, :text, default: "" 
  end
end
