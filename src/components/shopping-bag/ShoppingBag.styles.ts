import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1100;
  backdrop-filter: blur(2px);
`;

export const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 480px;
  max-width: 100vw;
  height: 100vh;
  background: #0d0d0d;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1101;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 480px) {
    width: 100vw;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
`;

export const DrawerTitle = styled.h2`
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -0.56px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.2s;

  &:hover { opacity: 1; }

  img { width: 18px; height: 18px; }
`;

export const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 32px 24px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.12); border-radius: 2px; }
`;

export const EmptyBag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 12px;
  color: rgba(255, 255, 255, 0.3);
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 300;
`;

export const CartItemRow = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr auto;
  gap: 16px;
  align-items: start;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const CartItemImage = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 4px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CartItemTitle = styled.span`
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.4px;
  line-height: 1;
`;

export const CartItemPrice = styled.span`
  color: rgba(255, 255, 255, 0.45);
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 300;
`;

export const CartItemQty = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;

export const QtyButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: #fff;
    color: #000;
    border-color: #fff;
  }
  &:disabled { opacity: 0.25; cursor: not-allowed; }
`;

export const QtyValue = styled.span`
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 300;
  min-width: 20px;
  text-align: center;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.25);
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 2px 0;
  transition: color 0.3s;

  &:hover { color: #fff; }
`;

export const DrawerFooter = styled.div`
  padding: 20px 32px 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const TotalLabel = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const TotalAmount = styled.span`
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-size: 30px;
  letter-spacing: -0.6px;
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 54px;
  border-radius: 60px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0);
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: #fff;
    color: #000;
    border-color: #fff;
  }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s;
  margin-bottom: 4px;

  &:hover { color: #fff; }
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 14px;
  text-align: center;
  padding: 40px 32px;
`;

export const SuccessTitle = styled.h3`
  color: #fff;
  font-family: "Bebas Neue", sans-serif;
  font-size: 44px;
  font-weight: 400;
  letter-spacing: -0.88px;
`;

export const SuccessText = styled.p`
  color: rgba(255, 255, 255, 0.45);
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;
  max-width: 300px;
`;
