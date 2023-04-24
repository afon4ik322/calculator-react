import { FC } from 'react';
import ControlPanelFC from '@components/control-panel/control-panel-fc';
import { LinkAddress } from '@constants/constants';

const SettingsFCPage: FC = () => (
  <>
    <h2 data-test-id={`${LinkAddress.settingsfc}-page`}>Settings FC</h2>
    <ControlPanelFC />
  </>
);

export default SettingsFCPage;
