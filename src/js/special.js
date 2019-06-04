import '../css/special.styl';

import BaseSpecial from './base';
import Data from './data';
import Svg from './svg';
import * as Share from './lib/share';
import * as Analytics from './lib/analytics';
import { makeElement } from './lib/dom';

const CSS = {
  main: 'special',
};

class Special extends BaseSpecial {
  constructor(params = {}) {
    super();

    Object.assign(this.params, params);
    this.saveParams();

    if (Data && params.data) {
      Object.assign(Data, params.data);
    }

    if (this.params.css) {
      this.loadStyles(this.params.css).then(() => this.init());
    } else {
      this.init();
    }
  }

  setInitialParams() {
    this.activeIndex = 0;
    this.correctAnswers = 0;
  }

  init() {
    this.container.classList.add(CSS.main);
    this.container.classList.add(this.params.isFeed ? 'is-feed' : 'is-not-feed');

    this.typeShowing = this.params.isFeed ? 'in Feed' : 'in Page';

    this.setInitialParams();
  }
}

export default Special;
