import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const humanTheme = create({
    base: 'dark',

    brandTitle: 'HumanTouch UI',
    brandUrl: 'https://www.figma.com/file/uaa9wsYvULVo5TutmoHCk5/HealthTrust-Library?type=design&node-id=2-2264&mode=dev',
    brandImage: 'logo.png',

    fontBase: '"Open Sans", sans-serif',
    appBg: '#1E345D',
    textColor: 'white',
    textMutedColor: '#ffffffb3',
    colorSecondary: '#0074B8',
});

addons.setConfig({
    theme: humanTheme,
    isToolshown: true,
    sidebar: {
        showRoots: true,
    },
});