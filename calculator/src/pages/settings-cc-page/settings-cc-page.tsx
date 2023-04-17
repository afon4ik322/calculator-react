import { Component } from 'react';

import { LinkAddress } from '@constants/constants';
import ControlPanelCC from '@components/control-panel/control-panel-cc';

class SettingsCCPage extends Component {
  render() {
    return (
      <>
        <h2 data-test-id={`${LinkAddress.settingscc}-page`}>Settings CC</h2>
        <ControlPanelCC />
      </>
    );
  }
}

export default SettingsCCPage;
