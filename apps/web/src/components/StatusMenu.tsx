import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  status: 'active' | 'in_progress' | 'closed';
  onChangeStatus: (newStatus: 'active' | 'in_progress' | 'closed') => void;
}

const StatusMenu = ({ status, onChangeStatus }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme={
        status === 'active' ? 'green' :
        status === 'in_progress' ? 'yellow' :
        'red'
      }>
        {status.toUpperCase()}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onChangeStatus('active')}>Active</MenuItem>
        <MenuItem onClick={() => onChangeStatus('in_progress')}>In Progress</MenuItem>
        <MenuItem onClick={() => onChangeStatus('closed')}>Closed</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default StatusMenu;