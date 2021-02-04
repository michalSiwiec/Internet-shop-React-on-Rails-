class Order < ApplicationRecord
    has_one :deliveryAddress
    has_one :dataPerson
    belongs_to :user, optional: true
end
