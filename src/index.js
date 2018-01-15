import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    render(){
        return (
            <div>
                Hello World!I'm Comming!
            </div>
        )
    }
}

ReactDOM.render(<Button />, document.getElementById('container'));