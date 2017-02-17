class Api::V1::CatsController < Api::V1::BaseController
  def index
    respond_with Cat.all
  end

  def create
    respond_with :api, :v1, Cat.create(cat_params)
  end

  def destroy
    respond_with Cat.destroy(params[:id])
  end

  def update
    cat = Cat.find(params["id"])
    cat.update_attributes(cat_params)
    respond_with cat, json: cat
  end

  private

  def cat_params
    params.require(:cat).permit(:id, :name, :breed)
  end
end
