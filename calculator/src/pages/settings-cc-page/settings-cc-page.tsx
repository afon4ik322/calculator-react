import { Component } from 'react';
import ControlPanelCC from '@components/control-panel/control-panel-cc';
import { LinkAddress } from '@constants/constants';

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
