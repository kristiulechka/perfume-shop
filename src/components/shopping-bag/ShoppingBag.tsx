import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { closeCart, removeItem, updateQuantity, clearCart } from '../../store/cartSlice';
import { OrderForm, type OrderFormData } from './OrderForm';
import {
  Overlay,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  CloseButton,
  DrawerBody,
  EmptyBag,
  CartItemRow,
  CartItemImage,
  CartItemInfo,
  CartItemTitle,
  CartItemPrice,
  CartItemQty,
  QtyButton,
  QtyValue,
  RemoveButton,
  DrawerFooter,
  TotalRow,
  TotalLabel,
  TotalAmount,
  ActionButton,
  BackButton,
  SuccessContainer,
  SuccessTitle,
  SuccessText,
} from './ShoppingBag.styles';

type View = 'cart' | 'checkout' | 'success';

const FORM_ID = 'order-form';

export const ShoppingBag = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const [view, setView] = useState<View>('cart');

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleClose = () => {
    dispatch(closeCart());
    setView('cart');
  };

  const handleOrderSubmit = (_data: OrderFormData) => {
    dispatch(clearCart());
    setView('success');
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={handleClose} />
      <Drawer>
        <DrawerHeader>
          {view === 'checkout' && (
            <BackButton onClick={() => setView('cart')}>← Back</BackButton>
          )}
          <DrawerTitle>
            {view === 'cart' && 'Shopping Bag'}
            {view === 'checkout' && 'Checkout'}
            {view === 'success' && 'Thank you'}
          </DrawerTitle>
          <CloseButton onClick={handleClose}>
            <img src="/icons/cross.svg" alt="Close" />
          </CloseButton>
        </DrawerHeader>

        {view === 'success' ? (
          <SuccessContainer>
            <SuccessTitle>Order placed</SuccessTitle>
            <SuccessText>
              Thank you for your purchase. We'll send you a confirmation email shortly.
            </SuccessText>
            <ActionButton onClick={handleClose} style={{ marginTop: '8px' }}>
              Continue shopping
            </ActionButton>
          </SuccessContainer>
        ) : (
          <>
            <DrawerBody>
              {view === 'cart' && (
                items.length === 0 ? (
                  <EmptyBag>Your bag is empty</EmptyBag>
                ) : (
                  items.map(item => (
                    <CartItemRow key={item.id}>
                      <CartItemImage src={item.image} alt={item.title} />
                      <CartItemInfo>
                        <CartItemTitle>{item.title}</CartItemTitle>
                        <CartItemPrice>${item.price}</CartItemPrice>
                        <CartItemQty>
                          <QtyButton
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                            disabled={item.quantity <= 1}
                          >
                            −
                          </QtyButton>
                          <QtyValue>{item.quantity}</QtyValue>
                          <QtyButton
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          >
                            +
                          </QtyButton>
                        </CartItemQty>
                      </CartItemInfo>
                      <RemoveButton onClick={() => dispatch(removeItem(item.id))}>
                        Remove
                      </RemoveButton>
                    </CartItemRow>
                  ))
                )
              )}

              {view === 'checkout' && (
                <OrderForm formId={FORM_ID} onSubmit={handleOrderSubmit} />
              )}
            </DrawerBody>

            <DrawerFooter>
              {view === 'cart' && (
                <>
                  <TotalRow>
                    <TotalLabel>Total</TotalLabel>
                    <TotalAmount>${total}</TotalAmount>
                  </TotalRow>
                  <ActionButton onClick={() => setView('checkout')} disabled={items.length === 0}>
                    Checkout
                  </ActionButton>
                </>
              )}

              {view === 'checkout' && (
                <ActionButton type="submit" form={FORM_ID}>
                  Place order
                </ActionButton>
              )}
            </DrawerFooter>
          </>
        )}
      </Drawer>
    </>
  );
};
