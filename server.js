const express = require("express")
const helmet = require("helmet")
const featurePolicy = require("feature-policy")

const app = express()
const port = process.env.PORT || 3000

app.use(helmet({
	contentSecurityPolicy: {
		directives: {
			"default-src": ["'self'"]
		}
	}
}));
app.use(featurePolicy({
	features: {
		accelerometer: ["'none'"],
		ambientLightSensor: ["'none'"],
		autoplay: ["'none'"],
		battery: ["'none'"],
		camera: ["'none'"],
		displayCapture: ["'none'"],
		documentDomain: ["'none'"],
		documentWrite: ["'none'"],
		encryptedMedia: ["'none'"],
		executionWhileNotRendered: ["'none'"],
		executionWhileOutOfViewport: ["'none'"],
		fontDisplayLateSwap: ["'none'"],
		fullscreen: ["'none'"],
		geolocation: ["'none'"],
		gyroscope: ["'none'"],
		layoutAnimations: ["'none'"],
		legacyImageFormats: ["'none'"],
		loadingFrameDefaultEager: ["'none'"],
		magnetometer: ["'none'"],
		microphone: ["'none'"],
		midi: ["'none'"],
		navigationOverride: ["'none'"],
		notifications: ["'none'"],
		oversizedImages: ["'none'"],
		payment: ["'none'"],
		pictureInPicture: ["'none'"],
		publickeyCredentials: ["'none'"],
		push: ["'none'"],
		serial: ["'none'"],
		speaker: ["'none'"],
		syncScript: ["'none'"],
		syncXhr: ["'none'"],
		unoptimizedImages: ["'none'"],
		unoptimizedLosslessImages: ["'none'"],
		unoptimizedLossyImages: ["'none'"],
		unsizedMedia: ["'none'"],
		usb: ["'none'"],
		verticalScroll: ["'none'"],
		vibrate: ["'none'"],
		vr: ["'none'"],
		wakeLock: ["'none'"],
		xr: ["'none'"],
		xrSpatialTracking: ["'none'"]
	}
}))

app.use((req, res, next) => {
	res.set('Permissions-Policy', 'accelerometer=(), ambientlightsensor=(), autoplay=(), battery=(), camera=(), displayCapture=(), documentDomain=(), documentWrite=(), encryptedMedia=(), executionWhileNotRendered=(), executionWhileOutOfViewport=(), fontDisplayLateSwap=(), fullscreen=(), geolocation=(), gyroscope=(), layoutAnimations=(), legacyImageFormats=(), loadingFrameDefaultEager=(), magnetometer=(), microphone=(), midi=(), navigationOverride=(), notifications=(), oversizedImages=(), payment=(), pictureInPicture=(), publickeyCredentials=(), push=(), serial=(), speaker=(), syncScript=(), syncXhr=(), unoptimizedImages=(), unoptimizedLosslessImages=(), unoptimizedLossyImages=(), unsizedMedia=(), usb=(), verticalScroll=(), vibrate=(), vr=(), wakeLock=(), xr=(), xrSpatialTracking=()')
	next()
})

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})