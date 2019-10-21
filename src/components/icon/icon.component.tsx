import React, {
  FunctionComponent, ReactElement} from 'react';
import { IconTypes } from './icontypes.enum';

export type IconProps = {
  block?: 'block' | 'inline-block'
  type : IconTypes
};

export const Icon: FunctionComponent<IconProps> = (
  props: IconProps
): ReactElement => 
    <svg viewBox="0 0 1024 1024" 
      width="20px" 
      height="20px" 
      style={{display: props.block}} 
      aria-label={IconTypes[props.type]}
    >
      <path d={props.type}/>
    </svg>
;
