import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 99999999;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: flex-end;
`;

export const SidebarContainer = styled.aside`
  width: 400px;
  height: 100%;
  background: #eee;

  animation: growth 0.4s ease-in-out;

  @keyframes growth {
    0% {
      transform: translate(400px);
    }
    100% {
      transform: translate(0px);
    }
  }

  @media (max-width: 1280px) {
    width: 100%;
  }
`;

export const SidebarHeader = styled.header`
  height: 55px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);

  padding: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SidebarTitle = styled.span`
  color: #000;
  font-weight: bold;
  margin-left: 10px;
  font-size: 1.5rem;
`;
