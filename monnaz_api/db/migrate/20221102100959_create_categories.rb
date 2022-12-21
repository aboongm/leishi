class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :title
      t.string :image
      t.integer :code_number

      t.timestamps
    end
  end
end
