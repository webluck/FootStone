import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    render(){
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(<Button />, document.getElementById('container'));