export interface FilterProps {
  filterGroup: FilterConfig[];
  onChange?: () => void;
}

export interface FilterConfig {
  label: string;
  type: string;
  options: string[];
}
