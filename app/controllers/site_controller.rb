class SiteController < ApplicationController
  def index
    @cats = Cat.all
  end
end
