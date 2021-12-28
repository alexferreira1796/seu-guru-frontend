import styled from 'styled-components';

interface IContainer {
  image: string;
}

interface IDropResults {
  show: boolean;
}

export const Container = styled.section<IContainer>`
  width: 100%;
  height: 600px;
  background-image: url(${({ image }) => image});
  background-size: cover, max(400px, 50%);
  background-color: rgb(248, 255, 221);
  background-position: left top, -150px 120px;
  background-repeat: repeat, no-repeat;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
`;

export const BoxContact = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Title = styled.h2`
  font-size: 3em;
  font-family: 'Eina-Semibold';
  line-height: 61px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_dark};
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 1.25em;
  text-align: center;
  line-height: 40px;
`;

export const BoxImage = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

export const Dropdown = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgb(255, 255, 255);
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 10%) 11px 12px 50px;
  border-radius: 5px;
  max-width: 515px;
  width: 620px;
  height: 74px;
  padding: 10px;
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  outline: none;
  flex: 1 1 0%;
  background: none;
  padding: 0px 0px 0px calc(0.75px + 1.27vw);
  font-size: 1em;
  font-family: 'Graphik-Regular';
  min-width: 0px;
  color: ${({ theme }) => theme.colors.gray_dark};

  &:not(:last-child) {
    border-right: 1px solid rgb(221, 221, 221);
  }
`;

export const Button = styled.button`
  padding: 0px calc(3.18px + 0.68vw) 0px calc(5.35px + 1.36vw);
  background: none;
  cursor: pointer;
  text-transform: lowercase;
  font-family: 'Graphik-Medium';
  font-weight: 500;
  font-size: 0.87em;
  display: flex;
  align-items: center;

  &::after {
    transition: all 0.3s ease 0s;
    content: '';
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgb(0, 0, 0);
    margin-left: 11px;
  }
`;

export const DropdownResults = styled.div<IDropResults>`
  background: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 11px 12px 50px;
  border-radius: 5px;
  padding: 0px 12.5px;
  box-sizing: border-box;
  width: 100%;
  max-width: 515px;
  transition: all 0.3s ease 0s;
  max-height: 300px;
  overflow-y: auto;
  height: 168px;

  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: translateY(-10%);
  pointer-events: none;
`;
