class AddReferencesToProducts < ActiveRecord::Migration[7.0]
  def change
    # add_column :products, :category_id, :integer
    add_reference :products, :seller, foreign_key: { to_table: :users}

    add_reference :products, :category, index: true, foreign_key: true
  end
end
