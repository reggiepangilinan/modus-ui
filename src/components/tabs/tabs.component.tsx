import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  ReactNode
} from 'react';

import styles from './tabs.styles.scss';

export type TabsProps = {} & PropsWithChildren<ReactNode>;

export const Tabs: FunctionComponent<TabsProps> = (
  props: TabsProps
): ReactElement => {
  return <div className={styles.tabsContainer}>{props.children}</div>;
};

export type TabItemProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export const TabItem: FunctionComponent<TabItemProps> = (
  props: TabItemProps
): ReactElement => {
  return (
    <div className={styles.tabItemContainer}>
      <div
        className={props.active ? styles.tabActive : styles.tab}
        onClick={props.onClick}
      >
        <label>{props.label}</label>
      </div>
    </div>
  );
};
