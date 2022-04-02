import React from 'react';
import styled from 'styled-components/native';

import CloseIcon from '../assets/x.svg'

export const Modal = styled.Modal``;

export const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0,0,0, 0.5);
  justify-content: flex-end;
`;

export const ModalBody = styled.View`
  min-height: 150px;
  background-color: #FDC300;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 60px 20px 50px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content:center;
  align-items: center;
  top: 25px;
  left: 25px;
  position: absolute;
`;

export default ({visible, setVisible, children}) => {

  return (
    <Modal 
      transparent={true}
      visible={visible}
      animationType={'fade'}
    >
      <ModalArea>
        <ModalBody>
          <CloseButton onPress={() => setVisible(false)}>
            <CloseIcon />
          </CloseButton>
          {children}
        </ModalBody>
      </ModalArea>
    </Modal>
  );
}