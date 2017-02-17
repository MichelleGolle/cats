require 'rails_helper'

RSpec.describe Api::V1::CatsController, type: :controller do
  fixtures :cats

  it "responds with json" do
    get :index, format: :json
    expect(response.status).to eq(200)
  end

  describe "#index" do
    it "returns all cats" do
      get :index, format: :json
      expect(json_response.count).to eq Cat.all.count
    end
  end

  describe "#create" do
    it "creates a new cat" do
      cat = { name: "Mew", breed: "Persian" }
      post :create, cat: cat, format: :json

      expect(response.status).to eq 201
      expect(json_response["id"]).to eq Cat.last.id
      expect(json_response["name"]).to eq Cat.last.name
    end
  end

  describe "#destroy" do
    it "deletes a cat" do
      count = Cat.all.count
      delete :destroy, id: Cat.last.id, format: :json

      expect(response.status).to eq 204
      expect(count - 1).to eq Cat.all.count
    end
  end

  describe "#update" do
    it "updates a cat" do
      cat = { name: "Updated name" }
      put :update, id: Cat.first.id, cat: cat, format: :json

      expect(response.status).to eq 200
      expect(Cat.first.name).to eq "Updated name"
    end
  end

end
