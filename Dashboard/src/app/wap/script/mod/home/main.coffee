app = require 'app'
Skateboard = require 'skateboard'
$ = require 'jquery'
React = require 'react'
WebsiteList = require '../../component/WebsiteList/main'

class Mod extends Skateboard.BaseMod
	cachable: true

	events:
		'click #home-btn-pre': 'prePage'
		'click #home-btn-next': 'nextPage'

	pageSelector: null

	_bodyTpl: require './body.tpl.html'

	loadWebsites: (page=1, pageSize=10)=>
		app.ajax.get
			url: '/api/v1/websites' + '?page=' + page + '&pageSize=' + pageSize;
			success: (res)=>
				React.render(
					React.createElement(WebsiteList, {websites: res}),
					document.getElementById('container-website-list')
				)
			error:(err)=>
				app.alerts.alert '网络繁忙，请稍后再试'


	render: =>
		super

		@pageSelector = $('#home-page-index')
		@loadWebsites(1)

	prePage: =>
		page = parseInt(@pageSelector.text())
		if page - 1 > 0
			@loadWebsites(page - 1)
			@pageSelector.text(page - 1)

	nextPage: =>
		page = parseInt(@pageSelector.text())
		@loadWebsites(page + 1)
		@pageSelector.text(page + 1)



module.exports = Mod
