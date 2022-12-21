class AddMobileToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :mobileNo, :string
  end
end
