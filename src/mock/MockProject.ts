import {ContentfulImageLink, Project} from '../app/common/model/project';
import {Entry, Sys} from 'contentful';

export const MOCK_PROJECT: Entry<Project> = {
    sys: {} as Sys,
    toPlainObject: () => { return {} as Entry<Project>; },
    // toPlainObject: {} as Entry<Project>,
    fields: {
        title: 'New Project',
        subTitle: 'lorem ipsum',
        author: 'Pamela Berganio',
        creationDate: '',
        description: '',
        mainImage: { sys: { id: '`123345455656'} } as ContentfulImageLink,
        images: [],
        tags: []
    }
};

export const MOCK_PROJECTS: Array<Entry<Project>> = [
    MOCK_PROJECT,
    MOCK_PROJECT,
    MOCK_PROJECT,
    MOCK_PROJECT,
    MOCK_PROJECT,
    MOCK_PROJECT,
    MOCK_PROJECT
];


