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
