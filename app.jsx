import { useState } from "react"
import { createRoot } from "react-dom/client"
function App() {
	const [count, setCount] = useState(0)
	return <>
		<h1>Hasil :{count}</h1>
		<button onClick={() => setCount(count + 1)}> Update </button>
		<button onClick={() => setCount(0)}> Reset </button>

	</>
}
const container = document.getElementById("app")
const root = createRoot(container)
root.render(<App />)
