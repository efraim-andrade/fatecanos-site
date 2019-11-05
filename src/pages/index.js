import React from 'react';
import styled from 'styled-components';

import { SEO, Layout, Badge } from '../components';

import colors from '../theme/colors';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <Content>
        <Left>
          <h1>Fatecanos</h1>

          <p>Uma alternativa ao SIGA que todo fatecano precisava :)</p>

          <Badges>
            <Badge />

            <Badge store="apple" />
          </Badges>
        </Left>

        <Right>
          <img
            alt="Background"
            title="Background"
            src={require('../images/background.svg')}
          />
        </Right>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 100%;

  > h1 {
    font-size: 48px;
    line-height: 1.21;
    font-weight: bold;
    font-family: 'Josefin Sans', sans-serif;
    color: ${colors.secondary};
  }

  > p {
    margin-bottom: 24px;

    font-size: 24px;
    font-weight: 500;
    line-height: 1.38;
    color: ${colors.white};
  }
`;

const Badges = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  position: relative;

  width: 100%;
  height: calc(90vh - 48px);

  &::before,
  &::after {
    position: absolute;
    top: 55%;
    transform: translateY(-50%);

    content: '';
    display: block;
    border-radius: 50%;
    background: ${colors.primary};
    box-shadow: 0 3px 20px 0 rgba(78, 80, 217, 0.84);
  }

  &:before {
    left: -10%;
    z-index: 2;

    width: 400px;
    height: 400px;
  }

  &:after {
    z-index: 1;
    left: 15%;

    width: 530px;
    height: 530px;
  }

  img {
    position: absolute;
    left: 0;
    top: 8%;
  }
`;

export default IndexPage;
