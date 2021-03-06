import React from 'react';
import styled, {
    css
} from 'styled-components';

export default class Button2 extends React.PureComponent {

    render() {
            // console.log("Button2 rendered");
            const Button = styled.div`
                padding: 30px 100px;
                font-size: 12px;
                display: inline-block;
                user-select: none;

            ${props => props.disabled && css`
                color: rgba(255, 255, 255, 0.75);
                background-color: #94d3a2;
                background-image: none;
                border-color: rgba(27, 31, 35, 0.2);
                box-shadow: none;
                cursor: not-allowed;
            `}

            ${props => !props.disabled && css`
                color: #fff;
                background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);
                cursor: pointer;
                
                background-repeat: repeat-x;
                background-position: -1px -1px;
                background-size: 110% 110%;
                border: 1px solid rgba(27,31,35,0.2);
                border-radius: 0.25em;

                :hover{
                    background-color: #269f42;
                    background-image: linear-gradient(-180deg, #2fcb53 0%, #269f42 90%);
                    background-position: 0 -0.5em;
                    border-color: rgba(27, 31, 35, 0.5)
                }

                :active{
                    background-color: #279f43;
                    background-image: none;
                    border-color: rgba(27, 31, 35, 0.5);
                    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15)
                }
            `}
        `;

        return(
            <div> 
                <Button onClick={this.props.onClick}>{this.props.children}</Button>
            </div>
        )
    }
}