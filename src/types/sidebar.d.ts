export interface MenuItem {
  text: string;
  href?: string;
  handleClick?: () => void;
  icon: React.ElementType;
}

export interface SidebarMenuProps {
  item: MenuItem;
}
