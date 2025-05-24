export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  submenu?: NavItem[];
};

export type CapabilityItem = {
  title: string;
  description: string;
  icon: string;
};

export type AudienceItem = {
  title: string;
  description: string;
  icon: string;
};