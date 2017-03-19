class UsersController < ApplicationController

  before_action :authenticate_user!

  def index
    render json: User.all.to_json(include: {
        budget: {only: :id}
    }, except: [:email, :created_at, :updated_at])
  end

  def show
    render json: User.find(params[:id]).to_json(include: {
        budget: {only: :id}
    }, except: [:email, :created_at, :updated_at])
  end

end
