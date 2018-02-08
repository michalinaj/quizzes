require 'rails_helper'

  RSpec.describe Question, type: :model do
    it {should have_valid(:body).when('Hello in Spanish')}
    it {should_not have_valid(:body).when(nil, '', ' ')}

end
