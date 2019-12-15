import React, { ReactElement, ReactNode } from 'react';

import {
  IconAngle,
  IconButton,
  IconSize,
  IconTypes,
  TableCell,
  TableRow
} from '../../index';

export const getLotsOfRows = (): ReactNode => {
  const rows = new Array<ReactElement>();
  for (let index = 1; index < 200; index++) {
    rows.push(
      <TableRow key={index.toString()}>
        <TableCell>John Doe {index}</TableCell>
        <TableCell>10</TableCell>
        <TableCell>
          The quick brown fox jumps over the lazy dog {index}
        </TableCell>
        <TableCell align="right">
          <IconButton
            type={IconTypes.ellipsis}
            transform={IconAngle.NegativeNinety}
            size={IconSize.XSmall}
          />
        </TableCell>
      </TableRow>
    );
  }
  return rows;
};
