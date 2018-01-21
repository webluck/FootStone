import React from 'react';
import ReactDOM from 'react-dom';
import styled, {
    css
} from 'styled-components';

export default class Button3 extends React.Component {

    render() {
        const opend = this.props.opend;
        const Div = styled.div`
            display:inline-block;
            :hover{
                cursor:pointer;
            }
        `;

        const Div1 = styled.div`
                width: 180px;
                height: 100px;
                border-radius: 50px;
                position: relative;
                box-sizing: border-box;
                transition:all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);

            ${props => opend && css`
                background-color: rgba(0,184,0,0.8);
            `}

            ${props => !opend && css`
                background-color: rgba(255,255,255,0.4);
                border:1px solid rgba(0,0,0,0.15);
            `}
        `;

        const Div2 = styled.div`
            width: 96px;
            height: 96px;
            box-sizing: border-box;
            border-radius: 48px;
            position: absolute;
            background: white;
            box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
            transition:all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);

            ${props => opend && css`
                top: 1px;
                left: 83px;
            `}

            ${props => !opend && css`
                top: 0px;
                left: 2px;
                border:1px solid rgba(0,0,0,0.1);
            `}
        `;

        return(
            <Div onClick={this.props.onClick}> 
                <Div1 innerRef={x=>this.div1 = x} opend={this.props.opend}><Div2 innerRef={x=>this.div2 = x} opend={this.props.opend}></Div2></Div1>
            </Div>
        )
    }

    shouldComponentUpdate(nextProp){
        const opend = nextProp.opend;
        if(opend){
            this.div1.style.backgroundColor="rgba(0,184,0,0.8)";
            this.div2.style.left="83px";
        }else{
            this.div1.style.backgroundColor="rgba(255,255,255,0.4)";
            this.div1.style.border="1px solid rgba(0,0,0,0.15)";
            this.div1.style.borderLeft="transparent";
            this.div2.style.left="2px";
        }
        return false;
    }
}