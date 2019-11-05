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
          <p>EU</p>
        </Right>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
`;

const Left = styled.div`
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
  background-image: url('../images/background.svg');
`;

export default IndexPage;
