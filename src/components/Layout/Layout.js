import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

const Layout = (props) =>(
    <Aux>
        <div>Toolbar, sidebar, backDrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default Layout;