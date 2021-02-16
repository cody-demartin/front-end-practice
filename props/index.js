class App extends React.Component {
	render() {
		return (
			<div>
				<p>Slots</p>
                <Machine 
                    s1="x"
                    s2="o"
                    s3="x"
                />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));