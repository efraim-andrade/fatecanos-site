import React from 'react';
import PropTypes from 'prop-types';

import { Container, Info } from './styles';

export default function Badge({ store }) {
  return (
    <Container
      store={store}
      target="_blank"
      href={
        store === 'google' &&
        'https://play.google.com/store/apps/details?id=com.fatecanos_app_rn&hl=en'
      }
    >
      <img
        alt="Store Logo"
        title="Store Logo"
        src={require(`../../images/${
          store === 'google' ? 'google-play' : 'app'
        }-store.svg`)}
      />

      <Info>
        <span>{store === 'google' ? 'Disponível no' : 'Em breve na'}</span>

        <p>{store === 'google' ? 'Google Play' : 'App Store'}</p>
      </Info>
    </Container>
  );
}

Badge.defaultProps = {
  store: 'google',
};

Badge.propTypes = {
  store: PropTypes.string,
};
