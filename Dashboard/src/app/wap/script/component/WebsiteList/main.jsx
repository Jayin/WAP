var React = require('react');
var Skateboard = require('skateboard')
var style = require('./main.scss')

var WebsiteList = React.createClass({
    getInitialState: function(){
		return {
			websites: this.props.websites || []
		}
	},
    handleItemClick: function(data, evt){
        evt.preventDefault();
        G.state.set({website: data});
        Skateboard.core.view('/view/information');
    },
    render: function(){
        var createItem = function(item){
            var formatDate = function(data_string){
                var d = new Date(data_string);
                return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
            }
            item.create_time = formatDate(item.create_time)
            return (
                <div onClick={this.handleItemClick.bind(this, item)} className="item" data-appkey={item.app_key}>
                    <div className="time">{item.create_time}</div>
                    <a href={item.domain} target="_blank">{item.domain}</a>
                    <div className="appkey">App Key: {item.app_key}</div>
                </div>
            );
        };

        return(
            <div>
                <style type="text/css" dangerouslySetInnerHTML={{__html: style.render()}}></style>
                <div className="conponent-WebsiteList">
                    {this.props.websites.map(createItem.bind(this))}
                </div>
            </div>
        );
    }
});

module.exports = WebsiteList;
