import React, { ReactElement, PropsWithChildren, ReactNode, FunctionComponent } from 'react';
import { Icon, IconTypes } from 'modus-ui';

export default {
  title: 'Components|Icons',
  component: Icon
}

type ItemProps = {} & PropsWithChildren<ReactNode>;

const Item : FunctionComponent<ItemProps>= (props: ItemProps): ReactElement => (
  <span style={{
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px 30px 30px 0px'
    
  }}>
    {props.children}
  </span>
);


export const  defaultIcon = (): ReactElement => 
  <>
  There are {Object.keys(IconTypes).length} icons
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
    
  }}>
    {Object.keys(IconTypes).map(key => {
      return (
        <Item key={key}>
          <Icon type={Object(IconTypes)[key]}  />
          <label>{key}</label>
        </Item>
      );
    }
  )}
  </div>  
  </>;
  
defaultIcon.story = {
name: 'Default'
};