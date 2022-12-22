class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.decimal :amount
      
      t.references :buyer, index: true, foreign_key: { to_table: :users}
      t.timestamps
    end
  end
end
