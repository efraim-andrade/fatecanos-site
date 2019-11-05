import styled from 'styled-components';

import colors from '../../theme/colors';

export const Container = styled.a`
  width: 170px;
  height: 50px;
  padding: 4px 12px;
  margin-right: 24px;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  opacity: ${props => (props.store === 'google' ? 1 : 0.6)};

  display: flex;
  align-items: center;

  cursor: pointer;
  background-color: ${colors.white};

  img {
    width: 33px;
    height: 33px;

    object-fit: contain;
  }
`;

export const Info = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 8px;

    font-size: 11px;
    font-weight: 600;
    line-height: 0.09;
    letter-spacing: -0.18px;
    color: ${colors.black};
    text-transform: uppercase;
  }

  p {
    line-height: 1;
    font-size: 21px;
    font-weight: 500;
    font-family: 'ProductSans-Medium';
    letter-spacing: -0.99px;
    color: ${colors.black};
  }
`;
