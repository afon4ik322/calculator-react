import { LinkAddress, LinkName } from '@constants/constants';

import S from './header.styled';

const Header = () => {
  const headerLinks: Array<{
    address: LinkAddress;
    title: LinkName;
  }> = [
    { address: LinkAddress.homefc, title: LinkName.homefc },
    { address: LinkAddress.homecc, title: LinkName.homecc },
    { address: LinkAddress.settingsfc, title: LinkName.settingsfc },
    { address: LinkAddress.settingscc, title: LinkName.settingscc },
  ];

  return (
    <S.container>
      <S.title>Calculator App</S.title>
      <S.linksList>
        {headerLinks.map((link) => (
          <S.link to={`/${link.address}`} data-test-id={link.address}>
            {link.title}
          </S.link>
        ))}
      </S.linksList>
    </S.container>
  );
};

export default Header;
