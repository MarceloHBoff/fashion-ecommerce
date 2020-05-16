import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background: #fff;
`;

export const Shimmer = styled.div`
  animation: progress 1.2s ease-in-out infinite;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #ccc;
  background-image: linear-gradient(90deg, #ccc, #fff, #ccc);

  @keyframes progress {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
`;

export const ImageShimmer = styled(Shimmer)`
  width: 100%;
  height: 400px;
`;

export const TextShimmer = styled(Shimmer)`
  height: 20px;
  width: 250px;
`;

export const PriceShimmer = styled(Shimmer)`
  height: 20px;
  width: 100px;
`;
