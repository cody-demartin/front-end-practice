// class JSXDemo extends React.Component {
//     render() {
//         return (
//             <img src="" />
//         );
//     }
// }

// JSX looks like HTML but is actually JavaScript
// Babel converts to JS function calls for us
// Fundamentally its syntactic sugar for the React.createElement function call
// React.createElement has an arity of 3

// If we have nested JSX, we get nested React.createElement calls
// JSX makes our lives much easier

// Embedding JS in JSX


const getMood = () => {
    const moods = ['angry', 'depressed', 'hungry', 'paranoid', 'silly']
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
            <div>
                <h1>My mood is: {getMood()}</h1>
            </div>
        );
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));

// user the curly boys to add JS expressions within JSX including function calls
// can also embed conditional logic within JSX