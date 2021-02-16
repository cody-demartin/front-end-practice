// props get passed down from one component to the next
// ie to="Ringo" then can call on it within class component by using this.props.to
// can do const props = this.props to shorten

// props are for configuring your component
// properties are immutable 
//  they are read only properties 
//  cannot add them either, will get non extensible error

// props can be strings
    // <User name="Jane" title="CEO" />

// for other types we must use embedded JS expressions using curly braces
    // <User name="Jane" title="CEO" salary={ 100000 } 
    //      hobbies={ ['bridge', 'reading', 'hiking']} />