import { type IconType } from "react-icons";

export interface SidebarUser {
  name: string;
  avatar: string;
  role?: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  href?: string;
  icon?: IconType;
  badge?: number | string;
  disabled?: boolean;
  subItems?: SidebarItem[];
}

export interface SidebarSection {
  id: string;
  title?: string;
  items: SidebarItem[];
}

export interface MobileSidebarControls {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export type SidebarVariant = "default" | "compact" | "floating" | "fullscreen" | "default-overlay";
export type SidebarPosition = "left" | "right";
export type CollapseTogglePosition = "top" | "bottom";
export type ToggleDeskBtnPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right" 
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right";

export interface SidebarProps {
  // Core props
  sections: SidebarSection[];
  activeItemId?: string;
  onItemClick: (itemId: string, item: SidebarItem) => void;
  
  // User profile
  user?: SidebarUser;
  showProfile?: boolean;
  
  // Styling variants
  variant?: SidebarVariant;
  position?: SidebarPosition;
  
  // Responsive behavior
  mobileBreakpoint?: number;
  hideOnDesk?: boolean;
  toggleDesk?: boolean;
  
  // Collapsible behavior
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  collapseTogglePosition?: CollapseTogglePosition;
  
  // Toggle button configuration
  toggleDeskBtnPosition?: ToggleDeskBtnPosition;
  toggleDeskBtnFixed?: boolean;
  toggleDeskIconOpen?:React.ReactNode
  toggleDeskIconClose?:React.ReactNode
  
  // Custom class names
  className?: string;
  containerClassName?: string;
  profileClassName?: string;
  navClassName?: string;
  toggleDeskIconClass?: string;
  sectionTitleClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  submenuFloatingClassName?: string;
  collapseToggleClassName?: string;
  toggleDeskBtnClass?: string;
  sidebarLogo?: React.ReactNode;
  // Features
  showActiveIndicator?: boolean;
  
  setIsDesktopVisible?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  toggleDeskBtnCls?: string;
  toggleDeskNavBar?: boolean;
  toggleDeskNavCls?: boolean;

  //overFlow variant
  overlayClassName?:string;
  overlayOpacity?:number;
  overlayClickClose?:boolean;
}

export interface StyleConfig {
  container: string;
  item: string;
  iconSize: number;
  width: string;
  collapsedWidth: string;
}