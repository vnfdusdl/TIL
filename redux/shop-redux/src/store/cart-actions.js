import { cartActions } from './cart';
import { uiActions } from './ui';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-http-study-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Fetching cart data failed');
      }

      const data = response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  //thunk return 에는 async 함수를 사용할 수 있다
  //dispatch 인자는 자동적으로 들어옴
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending..',
        title: 'sending..',
        message: 'sending cart data',
      })
    );
    // req 요청
    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-study-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('sending cart data failed!');
      }
    };

    try {
      // 요청이 끝나기를 기다려야하니 await
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'success!',
          message: 'sending cart data successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed',
        })
      );
    }
  };
};
