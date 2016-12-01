import React, { Component } from 'react';

class FeatureBit extends Component {

  componentDidMount() {
    // TODO: need to find a better approach or implement again here
    window.addEventListener('load', function() {
      new window.FeatureBitInDOM([this.el]).update();
    }.bind(this), false);
  }

  render() {
    return (
      <div ref={(div) => { this.el = div; }} data-feature-bit={this.props.name} data-options={this.props.dataOptions}>{this.props.children}</div>
    );
  }

}

export default FeatureBit;
