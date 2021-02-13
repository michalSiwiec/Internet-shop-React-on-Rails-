class Order < ApplicationRecord
    has_one :deliveryAddress
    has_one :dataPerson
    has_one :dataCreation
    belongs_to :user, optional: true
    has_and_belongs_to_many :product
end
