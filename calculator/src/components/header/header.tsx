import { LinkAddress, LinkName } from '@constants/constants';
import S from './header.styled';

const Header = () => {
  return (
    <S.container>
      <S.title>Calculator App</S.title>
      <S.linksList>
        <S.link to={'/' + LinkAddress.homefc} data-test-id={LinkAddress.homefc}>
          {LinkName.homefc}
        </S.link>
        <S.link to={'/' + LinkAddress.homecc} data-test-id={LinkAddress.homecc}>
          {LinkName.homecc}
        </S.link>
        <S.link to={'/' + LinkAddress.settingsfc} data-test-id={LinkAddress.settingsfc}>
          {LinkName.settingsfc}
        </S.link>
        <S.link to={'/' + LinkAddress.settingscc} data-test-id={LinkAddress.settingscc}>
          {LinkName.settingscc}
        </S.link>
      </S.linksList>
    </S.container>
  );
};

export default Header;
