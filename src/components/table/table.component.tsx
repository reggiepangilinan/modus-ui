import React, { FunctionComponent, ReactElement, ReactNode, PropsWithChildren } from 'react';
import styles from './table.styles.scss';
import { Spinner } from '../..';

export type TableHeadProps = {} & PropsWithChildren<ReactNode>;
/**
 * <TableHead/> generates <thead></thead> element
 * @param props
 */
export const TableHead: FunctionComponent<TableHeadProps> = (
  props: TableHeadProps
): ReactElement => {
  return (
    <thead>
      <tr>{props.children}</tr>
    </thead>
  );
};

export type TableHeaderProps = {
  label: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'char';
  maxWidth?: string;
};
/**
 *<TableHeader/> generates <th></th> element
 * @param props
 */
export const TableHeader: FunctionComponent<TableHeaderProps> = (
  props: TableHeaderProps
): ReactElement => {
  const currentAlign = props.align ? props.align : 'left';
  const style = props.maxWidth
    ? { maxWidth: props.maxWidth, width: props.maxWidth }
    : {};
  return (
    <th style={style} align={currentAlign}>
      {props.label}
    </th>
  );
};

export type TableRowProps = {
  key: string;
  children: ReactElement<TableCellProps>[];
};
/**
 *<TableRow/> generates <tr></tr> element
 * @param props
 */
export const TableRow: FunctionComponent<TableRowProps> = (
  props: TableRowProps
): ReactElement => {
  return <tr>{props.children}</tr>;
};

export type TableCellProps = {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char';
  children?: ReactNode;
};
/**
 *<TableCell/> generates <td></td> element
 * @param props
 */
export const TableCell: FunctionComponent<TableCellProps> = (
  props: TableCellProps
): ReactElement => {
  const currentAlign = props.align ? props.align : 'left';
  return <td align={currentAlign}>{props.children}</td>;
};

export type TableChildren = {
  header: ReactElement<TableHeadProps>;
  rows?: ReactElement<TableRowProps>[];
};
export type TableProps = {
  height?: string;
  emptyMessage?: string;
  isLoading: boolean;
  header: ReactNode;
  rows?: ReactNode;
};

/**
 *<Table/> generates <table></table> element
 * @param props
 */
export const Table: FunctionComponent<TableProps> = (
  props: TableProps
): ReactElement => {
  const style = props.height ? { height: props.height } : {};
  return (
    <>
      <div className={styles.container} style={style}>
          <table className={styles.table}>
            {props.header}
            <tbody>{!props.isLoading && props.rows}</tbody>
          </table>
          {props.isLoading && (
            <div className={styles.loaderContainer}>
              <Spinner />
            </div>
          )}
          {!props.isLoading && !props.rows && (
            <div className={styles.emptyPlaceholder}>
              <p>
                {props.emptyMessage
                  ? props.emptyMessage
                  : 'There is nothing here.'}
              </p>
            </div>
          )}
      </div>
    </>
  );
};
