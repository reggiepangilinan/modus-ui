import React, { ReactElement } from 'react';
import { Status, StatusType } from 'modus-ui';
import { SpaceAroundStory } from '../story-wrappers/space-around-story/space-around-story.component';

export default {
  title: 'Components|Status',
  component: Status
}

/**
 * All Status
 */
export const allStatus = (): ReactElement => 
    <>
      <Status type={StatusType.Success} text="Complete" />
      <Status type={StatusType.Warning} text="Warning" />
      <Status type={StatusType.Info} text="Info" />
      <Status type={StatusType.Error} text="Error" />
      <Status type={StatusType.Light} text="Light" />
    </>;
allStatus.story = {
name: 'All Status',
decorators: [(storyFn : any) : ReactElement => <SpaceAroundStory>{storyFn()}</SpaceAroundStory>]
};

export const success = (): ReactElement => 
    <>
      <Status type={StatusType.Success} text="Complete" />  
    </>;
success.story = {
name: 'Success'
};

export const warning = (): ReactElement => 
    <>
      <Status type={StatusType.Warning} text="Warning" />
    </>;
warning.story = {
name: 'Warning'
};

export const info = (): ReactElement => 
    <>
      <Status type={StatusType.Info} text="Info" />
    </>;
info.story = {
name: 'Info'
};


export const error = (): ReactElement => 
    <>
      <Status type={StatusType.Error} text="Error" />
    </>;
error.story = {
name: 'Error'
};

export const light = (): ReactElement => 
    <>
      <Status type={StatusType.Light} text="Light" />
    </>;
light.story = {
name: 'Light'
};

export const longText = (): ReactElement => 
    <>
      <Status type={StatusType.Success} text="This is a very very very long text for a status" />
    </>;
longText.story = {
name: 'A very long text'
};