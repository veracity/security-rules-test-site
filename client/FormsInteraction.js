import React, { useState } from "react"

export const FormsInteraction = () => {
	const [value, setValue] = useState("")

	const onSubmit = (e) => {
		e.preventDefault()
		alert("You wrote " + value)
	}

	return (
		<div>
			<h1>Forms and interactions</h1>
			<form onSubmit={onSubmit}>
				<input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="some value" />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default FormsInteraction