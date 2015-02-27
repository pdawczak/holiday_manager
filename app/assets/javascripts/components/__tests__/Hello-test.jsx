jest.dontMock("../Hello");

describe("Hello", function () {
    it("should say hello", function () {
        var React = require("react/addons");
        var TestUtils = React.addons.TestUtils;
        var Hello = require("../Hello");
        var helloComponent = TestUtils.renderIntoDocument(<Hello name="World"/>);

        expect(helloComponent.getDOMNode().textContent).toBe("Hello World!");
    });
});
