class Quiz < ApplicationRecord
  validates_presence_of :name, :description

  has_many :questions
  belongs_to :user, optional: true
  belongs_to :category
  attr_accessor :new_category_name
  before_save :create_category_from_name

  def create_category_from_name
    create_category(name: new_category_name) unless new_category_name.blank?
  end

  mount_uploader :quiz_picture, ProfilePhotoUploader

end
