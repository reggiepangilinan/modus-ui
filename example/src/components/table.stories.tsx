import { storiesOf } from '@storybook/react';
import { Table, TableCell, TableHead, TableHeader, TableRow } from 'modus-ui';
import React, { ReactElement } from 'react';

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
            <TableHeader label="Favorite Subject" />
            <TableHeader label="Address" />
            <TableHeader maxWidth="200px" label="Description" />
            <TableHeader maxWidth="100px" align="center" label="Actions" />
          </TableHead>
        }
        rows={[
          <TableRow key={'1'}>
            <TableCell>John</TableCell>
            <TableCell>10</TableCell>
            <TableCell>Some description to fill up the space</TableCell>
            <TableCell>
              This is a super duper long description, because lorem ipsum is
              booooring
            </TableCell>
            <TableCell>Well shake it up baby now!</TableCell>
            <TableCell></TableCell>
          </TableRow>,
          <TableRow key={'2'}>
            <TableCell>Paul</TableCell>
            <TableCell>10</TableCell>
            <TableCell>Math</TableCell>
            <TableCell></TableCell>
            <TableCell>Shake it up baby!</TableCell>
            <TableCell></TableCell>
          </TableRow>,
          <TableRow key={'3'}>
            <TableCell>George</TableCell>
            <TableCell>10</TableCell>
            <TableCell>Science</TableCell>
            <TableCell></TableCell>
            <TableCell>TWIST AND SHOUT!</TableCell>
            <TableCell></TableCell>
          </TableRow>,
          <TableRow key={'4'}>
            <TableCell>Ringo</TableCell>
            <TableCell>10</TableCell>
            <TableCell>Physical Education</TableCell>
            <TableCell></TableCell>
            <TableCell>TWIST AND SHOUT!</TableCell>
            <TableCell></TableCell>
          </TableRow>
        ]}
      />
    )
  )
  .add(
    'Empty',
    (): ReactElement => (
      <Table
        height={'100vh'}
        isLoading={false}
        header={
          <TableHead>
            <TableHeader maxWidth="120px" label="Name" />
            <TableHeader maxWidth="100px" label="Age" />
            <TableHeader label="Favorite Subject" />
            <TableHeader label="Address" />
            <TableHeader maxWidth="200px" label="Description" />
            <TableHeader maxWidth="100px" align="center" label="Actions" />
          </TableHead>
        }
      />
    )
  )
  .add(
    'Loading',
    (): ReactElement => (
      <Table
        height={'100vh'}
        isLoading={true}
        header={
          <TableHead>
            <TableHeader maxWidth="120px" label="Name" />
            <TableHeader maxWidth="100px" label="Age" />
            <TableHeader label="Favorite Subject" />
            <TableHeader label="Address" />
            <TableHeader maxWidth="200px" label="Description" />
            <TableHeader maxWidth="100px" align="center" label="Actions" />
          </TableHead>
        }
      />
    )
  );
