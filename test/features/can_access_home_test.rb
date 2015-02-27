require "test_helper"

class CanAccessHomeTest < Capybara::Rails::TestCase
  test "sanity" do
    visit root_path
    assert_content page, "Welcome in Holiday Management App!"
  end

  test "sanity with javascript" do
    Capybara.current_driver = Capybara.javascript_driver
    visit root_path
    assert_content page, "Hello Pawel!"
  end
end
