require 'rails_helper'

RSpec.describe Category, type: :model do
  describe "Validations" do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:image) }
    it { is_expected.to validate_presence_of(:code_number) }
  end

  describe "Associations" do
    it { is_expected.to have_many(:products).dependent(:destroy) }
  end
end
