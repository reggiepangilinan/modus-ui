import React, { FunctionComponent, ReactElement, useState } from 'react';

import { Icon, IconTypes } from '../..';
import styles from './accordion.styles.scss';

export type AccordionProps = {
  children: React.ReactNode;
};

export const Accordion: FunctionComponent<AccordionProps> = (
  props: AccordionProps
): ReactElement => {
  return <div>{props.children}</div>;
};

export type AccordionItemProps = {
  text?: string;
  children: React.ReactNode;
  expandAll?: boolean;
};

export const AccordionItem: FunctionComponent<AccordionItemProps> = (
  props: AccordionItemProps
): ReactElement => {
  const [expandItem, setExpandItem] = useState(false);

  return (
    <div>
      <div className={styles.content}>
        <div
          id="header"
          className={styles.header}
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          onClick={() => setExpandItem(!expandItem)}
        >
          <div className={styles.headerText}>{props.text} </div>
          <span className={expandItem ? styles.iconActive : styles.iconHidden}>
            <Icon type={IconTypes.arrowleft} size={10} />
          </span>
        </div>

        <div className={expandItem ? styles.panelActive : styles.panelHidden}>
          <span>{props.children}</span>
        </div>
      </div>
    </div>
  );
};
