class DeliveryAddress < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :order, optional: true
end
