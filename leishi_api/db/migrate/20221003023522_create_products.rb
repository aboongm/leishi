class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.decimal :price
      t.integer :rating, default: 1
      t.string :image

      t.timestamps
    end
  end
end
