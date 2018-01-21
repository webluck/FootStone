import React from 'react';
import ReactDOM from 'react-dom';
import styled, {
    css
} from 'styled-components';

import Button1 from './com/button/Button1';
import Button2 from './com/button/Button2';
import Button3 from './com/button/Button3';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={opend : false};
    }

    render() {
        return(
            <div>
                <section>
                    <h1>Button1</h1>
                    <div><Button1></Button1></div>
                </section>
                <section>
                    <h1>Button2</h1>
                    <div><Button2>Commit</Button2></div>
                </section>
                <section>
                    <h1>Button3</h1>
                    <div><Button3 opend={this.state.opend} onClick={()=>{this.turnChange()}}></Button3></div>
                </section>
            </div>
        )
    }

    turnChange(){
        this.setState({opend:!this.state.opend});
    }
}

ReactDOM.render(<Home/> , document.getElementById('container'));