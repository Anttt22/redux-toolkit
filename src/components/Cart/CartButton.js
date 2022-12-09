import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {uiActions} from '../../store/ui-slice'



const CartButton = (props) => {

  const dispatch =useDispatch();
  const cartQuantity=useSelector(state=>state.cart.totalQuantity)


  const cartButtonHandler=()=>{
    
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={cartButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
