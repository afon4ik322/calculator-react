import { FC } from 'react';
import ControlPanelFC from '@components/control-panel/control-panel-fc';
import { LinkAddress } from '@constants/constants';
import C from '@styles';

const SettingsFCPage: FC = () => (
  <>
    <C.pageHeader data-test-id={`${LinkAddress.settingsfc}-page`}>Settings FC</C.pageHeader>
    <ControlPanelFC />
  </>
);

export default SettingsFCPage;
