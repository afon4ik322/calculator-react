import { LinkAddress, LinkName } from '../../constants/constants';
import S from './header.styled';

const Header = () => {
  return (
    <S.container>
      <S.title>Calculator App</S.title>
      <S.linksList>
        <S.link to={'/' + LinkAddress.homefc}>{LinkName.homefc}</S.link>
        <S.link to={'/' + LinkAddress.homecc}>{LinkName.homecc}</S.link>
        <S.link to={'/' + LinkAddress.settingsfc}>{LinkName.settingsfc}</S.link>
        <S.link to={'/' + LinkAddress.settingscc}>{LinkName.settingscc}</S.link>
      </S.linksList>
    </S.container>
  );
};

export default Header;
