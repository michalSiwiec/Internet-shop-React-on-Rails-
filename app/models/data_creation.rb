class DataCreation < ApplicationRecord
    belongs_to :opinion, optional: true
    belongs_to :order, optional: true
    belongs_to :user, optional: true
end
