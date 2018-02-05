import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

    render(){
        return(
           <Aux>
               <Burger />
               <div>Burger Builder Handelars</div>
           </Aux>
        )
    }
}

export default BurgerBuilder;