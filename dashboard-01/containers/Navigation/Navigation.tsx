import { useState } from 'react';
import {
  ArticleOutlined,
  EmojiEventsOutlined,
  HomeOutlined,
  MonitorHeartOutlined,
  MonitorWeightOutlined,
  ReceiptLongOutlined,
} from '@mui/icons-material';
import { NavigationContainerStyled } from './Navigation.styles';
import MenuList, {
  MenuListItem,
  MenuListItemButton,
} from '../../components/Menu';

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
      <MenuList>
        {menuItems.map(({ Icon, label, id }) => {
          const selected = currentMenuListItemId === id;

          return (
            <MenuListItem key={id}>
              <MenuListItemButton
                handleClick={() => handleClick(id)}
                selected={selected}
                title={label}
                type="button"
              >
                {selected ? <Icon /> : <Icon style={{ color: '#767676' }} />}
              </MenuListItemButton>
            </MenuListItem>
          );
        })}
      </MenuList>
    </NavigationContainerStyled>
  );
};

export default Navigation;
