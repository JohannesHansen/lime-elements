import { Config } from '@stencil/core';
import { OutputTargetWww } from '@stencil/core/dist/declarations/output-targets';
import { sass } from '@stencil/sass';

const targetWww: OutputTargetWww = {
    type: 'www',
    serviceWorker: null,
    dir: '.docz/dist/stencil',
};

export const config: Config = {
    copy: [
        { src: 'dev-assets' },
        { src: 'examples/**/*.tsx' },
        { src: 'examples/**/*.scss' },
        { src: 'components/**/*.md' },
    ],
    hashFileNames: false,
    namespace: 'lime-elements',
    outputTargets: [targetWww],
    plugins: [
        sass({
            injectGlobalPaths: ['src/style/variables.scss'],
        }),
    ],
    tsconfig: './tsconfig.dev.json',
    globalScript: 'src/global/index.ts',
};