import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch  } from 'react-redux';
import { Fragment, useEffect} from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);   //useSelector sets up a subscription to redux whenever reedux change -> component function
                                                     // re-executes and we will get latest cart
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {       //created new function as we cant use async with useEffect()
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending....',
          message: 'Sending cart data',
        })
      )
      const response = await fetch('https://react-https-f33c3-default-rtdb.firebaseio.com/cart.json',    //re-executes whenever our cart changes
         {
          method: 'PUT', body: JSON.stringify(cart),
        }
      );
      if(!response.ok)
      {
        throw new Error('Sending cart data failed');
      }
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data succesfully!',
        })
      )
      };
      if(isInitial)
      {
        isInitial=false;
        return;
      }

      sendCartData().catch(error => {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!....',
            message: 'Sending cart data failed!',
          })
        );
      });

  },[cart, dispatch]);

  return (
    <Fragment>
      {
      notification && <Notification 
      status={notification.status} 
      title={notification.title} 
      message={notification.message}
      />
      }
        <Layout>
         {showCart && <Cart />}
         <Products />
        </Layout>
    </Fragment>
   
  );
}

export default App;
