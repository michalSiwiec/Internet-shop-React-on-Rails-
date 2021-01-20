class Admin < ApplicationRecord
    has_one :dataLogin
    has_one :dataPerson
end
