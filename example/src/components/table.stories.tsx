import { storiesOf } from '@storybook/react';
import {
  IconAngle,
  IconButton,
  IconSize,
  IconTypes,
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from 'modus-ui';
import React, { ReactElement } from 'react';

import { getLotsOfRows } from './getLotsOfRows';

storiesOf('Components/Table', module)
  .add(
    'Default',
    (): ReactElement => (
      <Table
        isLoading={false}
        header={
          <TableHead>
            <TableHeader maxWidth="120px" label="Name" />
            <TableHeader maxWidth="100px" label="Age" />
            <TableHeader label="Description" />
            <TableHeader maxWidth="100px" label="" />
          </TableHead>
        }
        rows={[
          <TableRow key={'1'}>
            <TableCell>John</TableCell>
            <TableCell>40</TableCell>
            <TableCell>Well, Shake it up baby now!</TableCell>
            <TableCell align="right">
              <IconButton
                type={IconTypes.ellipsis}
                transform={IconAngle.NegativeNinety}
                size={IconSize.XSmall}
              />
            </TableCell>
          </TableRow>,
          <TableRow key={'2'}>
            <TableCell>Paul</TableCell>
            <TableCell>20</TableCell>
            <TableCell>Shake it up baby!</TableCell>
            <TableCell align="right">
              <IconButton
                type={IconTypes.ellipsis}
                transform={IconAngle.NegativeNinety}
                size={IconSize.XSmall}
              />
            </TableCell>
          </TableRow>,
          <TableRow key={'3'}>
            <TableCell>George</TableCell>
            <TableCell>32</TableCell>
            <TableCell>TWIST AND SHOUT!</TableCell>
            <TableCell align="right">
              <IconButton
                type={IconTypes.ellipsis}
                transform={IconAngle.NegativeNinety}
                size={IconSize.XSmall}
              />
            </TableCell>
          </TableRow>,
          <TableRow key={'4'}>
            <TableCell>Ringo</TableCell>
            <TableCell>43</TableCell>
            <TableCell>TWIST AND SHOUT!</TableCell>
            <TableCell align="right">
              <IconButton
                type={IconTypes.ellipsis}
                transform={IconAngle.NegativeNinety}
                size={IconSize.XSmall}
              />
            </TableCell>
          </TableRow>
        ]}
      />
    )
  )
  .add(
    'Overflow',
    (): ReactElement => (
      <Table
        isLoading={false}
        height={'100vh'}
        header={
          <TableHead>
            <TableHeader maxWidth="120px" label="Name" />
            <TableHeader maxWidth="100px" label="Age" />
            <TableHeader label="Description" />
            <TableHeader maxWidth="100px" label="" />
          </TableHead>
        }
        rows={getLotsOfRows()}
      />
    )
  )
  .add(
    'Empty',
    (): ReactElement => (
      <Table
        isLoading={false}
        header={
          <TableHead>
            <TableHeader maxWidth="120px" label="Name" />
            <TableHeader maxWidth="100px" label="Age" />
            <TableHeader label="Description" />
          </TableHead>
        }
      />
    )
  )
  .add(
    'Loading',
    (): ReactElement => (
      <Table
        isLoading={true}
        header={
          <TableHead>
            <TableHeader maxWidth="120px" label="Name" />
            <TableHeader maxWidth="100px" label="Age" />
            <TableHeader label="Description" />
          </TableHead>
        }
      />
    )
  );
