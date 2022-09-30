import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

//App 컴포넌트 외부에 변수를 두어 App 컴포넌트가 리렌더링 되더라도 영향 받지 않도록 함.
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cartShow = useSelector((state) => state.ui.isVisible);
  // useSelector는 cart state를 구독하고(subscribe) 있어서, cart에 변화가 있을 때, App 컴포넌트를 재호출 한다.
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  //cart를 의존성 배열에 추가하여, cart에 변화가 있을 때, req를 보내도록 함
  useEffect(() => {
    // 처음 렌더링될 때는 sendCartData 함수가 실행되지 않고, 리렌더링 때만 실행되도록 함기 위함.
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.isChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartShow && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
