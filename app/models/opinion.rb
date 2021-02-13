class Opinion < ApplicationRecord
    belongs_to :user
    has_one :dataCreation
end
