import React, { Component } from 'react';

const asyncComp = (impComp) => {
  return class extends Component {
    state = {
      component: null,
    }

    componentDidMount() {
      impComp().then(cmp => {
        this.setState({
          component: cmp.default
        })
      })
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
}


export default asyncComp;
