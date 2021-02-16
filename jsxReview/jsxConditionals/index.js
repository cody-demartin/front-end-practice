function getNum() {
	return Math.floor(Math.random() * 10) + 1
}

class NumPicker extends React.Component {
	render() {
		const num = getNum();
		let msg;

		if(num === 7){
			msg = 'something'
			
			/**
			 * can also be valid jsx returned
			 */

		}
		else(
			msg = "something else"
		)

		return (
			<div>
				<h1>Your number is...{getNum()}</h1>
				<p>{num === 7 ? 'Congrats' : 'Unlucky'}</p>
				{num === 7 && <img src="someimg"/>}
			</div>
		)
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));

