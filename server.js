var express = require('express')
var path = require('path')
var compression = require('compression')

import React from "react"
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

import routes from './src/routes'
import html from "./src/html"

const app = express()
const PORT = process.env.PORT || 8080

app.use(compression())

// app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', function (req, res) {
	match({ routes: routes, location: req.url }, (err, redirect, props) => {
		 // in here we can make some decisions all at once
		if (err) {
			// there was an error somewhere during route matching
			res.status(500).send(err.message)
		} else if (redirect) {
			// we haven't talked about `onEnter` hooks on routes, but before a
			// route is entered, it can redirect. Here we handle on the server.
			res.redirect(redirect.pathname + redirect.search)
		} else if (props) {
			// if we got props then we matched a route and can render
			const body = renderToString(<RouterContext {...props}/>)
			res.send(html({
				body,
				title: ""
			}))
		} else {
			// no errors, no redirect, we just didn't match anything
			res.status(404).send('Not Found')
		}

	})
	// res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
	console.log('Production Express server running at localhost:' + PORT)
})
