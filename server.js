const express = require("express")
const helmet = require("helmet")
const getTemplate = require("./template")

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('dist'))

app.use(helmet({
	contentSecurityPolicy: {
		directives: {
			"default-src": ["'self'"],
			"img-src": ["'self'", "siteintercept.qualtrics.com"],
			"style-src": ["'self'", "siteintercept.qualtrics.com"],
			"style-src-attr": ["'self'", "'unsafe-hashes'", "'sha256-+17AcPK/e5AtiK52Z2vnx3uG3BMzyzRr4Qv5UQsEbDU='", "'sha256-dgGu9RsYQs5fsG/dUKEbTIaM0U+fNh/6lwVQQy9grtw='", "'sha256-UfGzSwHxQvKcLjFhDqFiNosuOZd4nv6/WYIZ5W+Mzrw='", "'sha256-813i06waEiG5NRkGknqRiKi6L9t4XAVXmsGJvURmCgo='", "'sha256-2+dS+n9Pah47gYjmchfaYD5g/iEbiyoAg7SGmiJtn0Y='"],
			"script-src": ["'self'", "'sha256-SWOo5jzXsUoLkRb5e/kZobnN0UrpoeS3SFqbEQoZDl0='", "siteintercept.qualtrics.com", "*.siteintercept.qualtrics.com"],
			"connect-src": ["'self'", "siteintercept.qualtrics.com"]
		},
	}
}))

app.use((req, res, next) => {
	res.set('Permissions-Policy', 'accelerometer=(), autoplay=(), battery=(), camera=(), fullscreen=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), notifications=(), payment=(), push=(), serial=(), speaker=(), usb=(), vibrate=(), vr=(), xr=()')
	next()
})

app.get("/", async (req, res) => {
	const template = await getTemplate({name: "Security test site", content: "This is the home page" })
	res.send(template)
})

app.get("/qualtrics/page1", async (req, res) => {
	const template = await getTemplate({name: "About", content: "This is the about page"})
	res.send(template)
})

app.get("/qualtrics/page2", async (req, res) => {
	const template = await getTemplate({name: "Forms", content: "This is the forms page"})
	res.send(template)
})


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
