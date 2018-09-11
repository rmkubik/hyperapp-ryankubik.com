import { h } from 'hyperapp';

import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';

export default (state, actions) => (
  <div class="root">
    <Nav state={state.nav} />
    <Main state={state.main} projects={state.projects} />
    <Footer state={state.footer} />
  </div>
);
