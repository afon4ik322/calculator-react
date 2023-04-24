import { Component } from 'react';
import ControlPanelCC from '@components/control-panel/control-panel-cc';
import { LinkAddress } from '@constants/constants';
import C from '@styles';

class SettingsCCPage extends Component {
  render() {
    return (
      <>
        <C.pageHeader data-test-id={`${LinkAddress.settingscc}-page`}>Settings CC</C.pageHeader>
        <ControlPanelCC />
      </>
    );
  }
}

export default SettingsCCPage;
