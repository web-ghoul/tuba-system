
    export type RemoteKeys = 'portals/App';
    type PackageType<T> = T extends 'portals/App' ? typeof import('portals/App') :any;