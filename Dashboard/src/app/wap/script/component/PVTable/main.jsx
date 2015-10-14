var React = require('react');
var style = require('./main.scss');
var app = require('app');

var PVTable = React.createClass({

    getInitialState: function() {
        return {
            website_id: this.props.website_id,
            data: this.props.data
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            website_id: nextProps.website_id,
            data: nextProps.data || this.state.data
        });
        if (nextProps.website_id) {
            this.fetchData(website_id);
        }
    },
    fetchData: function(website_id) {
        app.ajax.get({
            url: "api/v1/website/{website_id}/record/pv".replace('{website_id}', website_id),
            success: function(res) {
                this.setState({
                    data: res
                });
            }.bind(this),
            error: function() {
                app.alerts.alert('网络繁忙，请稍后再试');
            }
        })
    },
    componentDidMount: function() {
        if(this.state.website_id){
            this.fetchData(this.state.website_id);
        }
    },
    render: function() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{__html: style.render()}} type="text/css"/>
                <div className="conponent-PVTable">
                    <table className="ui celled padded table">
                        <thead>
                            <tr>
                                <th>
                                    当日</th>
                                <th>
                                    近7日</th>
                                <th>
                                    近30日</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="single line">
                                    {this.state.data? this.state.data.today:"无数据"}
                                </td>
                                <td className="single line">
                                    {this.state.data? this.state.data.past7day:"无数据"}
                                </td>
                                <td className="single line">
                                    {this.state.data? this.state.data.past30day:"无数据"}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

module.exports = PVTable;
