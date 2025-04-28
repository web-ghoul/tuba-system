
    export type RemoteKeys = 'company/App';
    type PackageType<T> = T extends 'company/App' ? typeof import('company/App') :any;