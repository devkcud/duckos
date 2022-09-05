export interface IWindowSample {
  id: string;

  title: string;
  body: any;
  icon?: string;

  hide?: boolean;

  defaultWidth?: number;
  defaultHeight?: number;

  defaultX?: number;
  defaultY?: number;

  gotoTaskbar?: boolean;

  onClose?: () => void;
}

export interface IItemList {
  icon?: string;
  tooltip: string;
  windowId: string;
}
