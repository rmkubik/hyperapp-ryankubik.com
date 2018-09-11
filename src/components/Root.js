import { h } from 'hyperapp';

import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';

export default (state, actions) => (
  <div class="root">
    <Nav state={state.nav} />
    <Main />
    <Footer />
  </div>
);
