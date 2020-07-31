import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: #ffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 12px !important;
  width: 25%;
`;

export const ContainerFields = styled.div`
  width: 100%;
`;

export const ContainerButton = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 12px;
  width: 100%;

  button {
    background: ${props => props.color};
    display: flex;
    justify-content: center;
    width: 152px;
  }
`;

export const TitleSpan = styled.div`
  color: #42526e;
  font: Bold 18px/24px Roboto;
  letter-spacing: 0px;
  text-align: left;
`;

export const SubTitleSpan = styled.div`
  color: #42526e;
  font-size: 16px;
  letter-spacing: 0px;
  text-align: left;
`;

export const ModalBackground = styled.div`
  align-items: center;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 1); /* Black w/ opacity */
  display: flex;
  height: 100%; /* Full height */
  justify-content: center;
  left: 0;
  overflow: hidden; /* Enable scroll if needed */
  position: fixed; /* Stay in place */
  top: 0;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  width: 100%; /* Full width */
  z-index: 9999; /* Sit on top */
  &:hidden {
    visibility: hidden;
    transition-delay: 0, 0.6s;
  }
`;
