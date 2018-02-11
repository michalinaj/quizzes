require 'rails_helper'

  RSpec.describe Answer, type: :model do
    it {should have_valid(:body).when('Ola')}
    it {should_not have_valid(:body).when(nil, '', ' ')}
  end
end
