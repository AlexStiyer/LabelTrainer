import "./App.scss";
import React from "react";
import ToolPanel from "./components/tool-panel/ToolPanel";
import BoxLabelsPanel from "./components/box-label-panel/Box-Labels-Panel";

function App() {
	return (
		<div className="App">
			<ToolPanel>
				<div className="Blank"></div>
				<BoxLabelsPanel/>
			</ToolPanel>
		</div>
	);
}

export default App;
