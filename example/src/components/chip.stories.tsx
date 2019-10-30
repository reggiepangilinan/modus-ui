import { Chip } from 'modus-ui';
import React, { ReactElement, ReactNode } from 'react';

import { SpaceAroundStory } from '../story-wrappers/space-around-story/space-around-story.component';

export default {
    title: 'Components|Chips',
    component: Chip
}


export const defaultChip = (): ReactElement => (
    <>
        <Chip text="Default" />
        <Chip text="Default" />
    </>
)

defaultChip.story = {
    name: 'Default Chips',
    decorators: [
        (storyFn: () => ReactNode): ReactElement => (
            <SpaceAroundStory>{storyFn()}</SpaceAroundStory>
        )
    ]
};

export const success = (): ReactElement => (
    <Chip text="Success" />
);
success.story = {
    name: 'Success'
}

