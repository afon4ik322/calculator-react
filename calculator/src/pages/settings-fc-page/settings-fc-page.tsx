import { FC } from 'react';

import { LinkAddress } from '@constants/constants';
import ControlPanelFC from '@components/control-panel/control-panel-fc';

const SettingsFCPage: FC = () => {
  return (
    <>
      <h2 data-test-id={`${LinkAddress.settingsfc}-page`}>Settings FC</h2>
      <ControlPanelFC />
    </>
  );
};

export default SettingsFCPage;
