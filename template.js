const Mustache = require("mustache")
const path = require("path")
const p = require("fs")
const fs = p.promises

module.exports = async ({ name, content = "" }) => {
	const template = path.resolve(__dirname, "./views/index.mustache")
	const navTemplate = path.resolve(__dirname, "./views/nav.mustache")
	const file = await fs.readFile(template)
	const nav = await fs.readFile(navTemplate)
	const render = Mustache.render(file.toString(), { name, content }, { nav: nav.toString() });
	return render
}