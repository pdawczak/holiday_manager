var React = require('react');

var styles = {
    default: {
        color: "black"
    },
    actived: {
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
                 style={this.state.toggled ? styles.actived : styles.default}>
                Hello {this.props.name}!
            </div>
        );
    }
});

module.exports = Hello;
