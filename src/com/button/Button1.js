import React from 'react';
import ReactDOM from 'react-dom';
import styled, {
    css
} from 'styled-components';

export default class Button1 extends React.PureComponent {

    render() {
        // console.log("Button1 rendered");
        const Button = styled.div `
            font-size:16px;
            border:1px solid gray;
            max-width:300px;
            padding:10px;
            text-align:center;
            background-color:#0E83CD;
            color:white;
            position: relative;
            :hover{
                background-color:white;
                cursor:pointer;
                color:#0E83CD;
            }
            :active{
                top:2px;
            }
            // :before{
            //     content:"hello-";
            // }
            // :after{
            //     content:"-world";
            // }

            transition:background-color 0.3s ease-in;
            transition:color 0.3s linear;

            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Chrome/Safari/Opera */
            -khtml-user-select: none; /* Konqueror */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently not supported by any browser */
        `;

        return ( 
            <div>            
                <Button>{this.props.children}</Button> 
            </div>
        )
    }
}