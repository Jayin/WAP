var React = require('react');
var style = require('./main.scss');
var app = require('app');

var SystemTable = React.createClass({

    getInitialState: function() {
        return {
            website_id: this.props.website_id,
            selectItem: this.props.selectItem || 'today', //today, past7day past30day
            data: this.props.data
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            website_id: nextProps.website_id,
            selectItem: this.props.selectItem || 'today',
            data: nextProps.data || this.state.data
        });
        if (nextProps.website_id) {
            this.fetchData(website_id);
        }
    },
    fetchData: function(website_id) {
        app.ajax.get({
            url: "api/v1/website/{website_id}/record/system".replace('{website_id}', website_id),
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
    handleItemClick: function(selectItem){
        this.setState({
            selectItem: selectItem
        })
    },
    render: function() {
        console.log(this.state)
        return (
            <div>
                <style dangerouslySetInnerHTML={{__html: style.render()}} type="text/css"/>
                <div className="conponent-LocationTable">
                    <div className="ui top attached tabular menu">
                      <a className={"item "+(this.state.selectItem === 'today'?"active":"")} onClick={this.handleItemClick.bind(this, 'today')}>今天</a>
                      <a className={"item "+(this.state.selectItem === 'past7day'?"active":"")} onClick={this.handleItemClick.bind(this, 'past7day')}>近7日</a>
                      <a className={"item "+(this.state.selectItem === 'past30day'?"active":"")} onClick={this.handleItemClick.bind(this, 'past30day')}>近30日</a>
                    </div>
                    <div className="ui bottom attached tab segment active">
                        <h3>OS</h3>
                        <table className="ui celled padded table">
                            <thead>
                                <tr>
                                  <th>操作系统</th>
                                  <th>访问量</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data && this.state.data[this.state.selectItem].os.map(function(item){
                                    return (
                                        <tr>
                                          <td className="single line">
                                            {item.name}
                                          </td>
                                          <td className="single line">
                                            {item.count}
                                          </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                          </table>
                          <h3>Browser</h3>
                          <table className="ui celled padded table">
                              <thead>
                                  <tr>
                                    <th>浏览器</th>
                                    <th>访问量</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {this.state.data && this.state.data[this.state.selectItem].browser.map(function(item){
                                      return (
                                          <tr>
                                            <td className="single line">
                                              {item.name}
                                            </td>
                                            <td className="single line">
                                              {item.count}
                                            </td>
                                          </tr>
                                      )
                                  })}
                              </tbody>
                            </table>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SystemTable;
