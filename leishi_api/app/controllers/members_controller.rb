class MembersController < ApplicationController
    before_action :authenticate_user!

    def home
        render json: current_user, status: :ok
    end
end