var React = require('react');

var styles = {
    default: {
        color: "black"
    },
    underlined: {
        color: "gray"
    }
};

var Hello = React.createClass({
    displayName: "HelloComponent",

    getInitialState: function () {
        return { toggled: false };
    },

    _handleClick: function () {
        this.setState({ toggled: !this.state.toggled });
    },

    render: function () {
        return (
            <div onClick={this._handleClick} 
                 style={this.state.toggled ? styles.underlined : styles.default}>
                Hello {this.props.name}!
            </div>
        );
    }
});

module.exports = Hello;
