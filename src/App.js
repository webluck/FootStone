import React from 'react';

import Button1 from './componets/form/button/Button1';
import Button2 from './componets/form/button/Button2';
import Button3 from './componets/form/button/Button3';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={opend : true};
    }

    render() {
        // console.log("Home rendered");
        return(
            <div>
                <section>
                    <h1>Button1</h1>
                    <div><Button1>Save</Button1></div>
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

export default App;
