import React, { SyntheticEvent, useState } from 'react';
import {
  ArticleOutlined,
  EmojiEventsOutlined,
  HomeOutlined,
  MonitorHeartOutlined,
  MonitorWeightOutlined,
  ReceiptLongOutlined,
} from '@mui/icons-material';
import {
  MenuListItemButtonStyled,
  MenuListItemStyled,
  MenuListStyled,
  NavigationContainerStyled,
} from './Navigation.styles';

const Navigation = () => {
  const [currentMenuListItemId, setCurrentMenuListItemId] = useState(0);

  const handleClick = (id: number) => {
    setCurrentMenuListItemId(id);
  };

  const menuItems = [
    {
      Icon: HomeOutlined,
      id: 0,
      label: 'Home',
    },
    {
      Icon: MonitorHeartOutlined,
      id: 1,
      label: 'Monitor Heart',
    },
    {
      Icon: MonitorWeightOutlined,
      id: 2,
      label: 'Monitor Weight',
    },
    {
      Icon: ArticleOutlined,
      id: 3,
      label: 'Article',
    },
    {
      Icon: EmojiEventsOutlined,
      id: 4,
      label: 'Emoji Events',
    },
    {
      Icon: ReceiptLongOutlined,
      id: 5,
      label: 'Receipt Long',
    },
  ];

  return (
    <NavigationContainerStyled>
      <MenuListStyled>
        {menuItems.map(({ Icon, id }) => {
          const selected = currentMenuListItemId === id;

          return (
            <MenuListItemStyled key={id}>
              <MenuListItemButtonStyled
                onClick={() => handleClick(id)}
                selected={selected}
                type="button"
              >
                {selected ? <Icon /> : <Icon style={{ color: '#767676' }} />}
              </MenuListItemButtonStyled>
            </MenuListItemStyled>
          );
        })}
      </MenuListStyled>
    </NavigationContainerStyled>
  );
};

export default Navigation;
