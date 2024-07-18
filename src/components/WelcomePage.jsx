import React from 'react';
import {Consumer} from '../Context1.js';

const WelcomePage=()=>{
    return (
        <div>
            <h1>Welcome Userr:</h1>
        <Consumer>
            {
                (value)=>{
                    <h2>
                        Name:{value.name} id:{value.id} {" "}
                    </h2>
                }
            }
        </Consumer>
        </div>
    )
}

export default WelcomePage