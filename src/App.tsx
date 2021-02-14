import "./App.scss";
import React from "react";
import ToolPanel from "./components/tool-panel/ToolPanel";
import BoxLabelsPanel from "./containers/box-label-panel/BoxLabelPanel";

function App() {
	return (
		<div className="App">
			<ToolPanel>
				<BoxLabelsPanel/>
			</ToolPanel>
		</div>
	);
}

export default App;
