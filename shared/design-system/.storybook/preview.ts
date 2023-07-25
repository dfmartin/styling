// .storybook/preview.js
import "vuetify/iconsets/mdi"
import { setup } from '@storybook/vue3';
import { registerPlugins } from './plugins';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';
import '../../stylesheets/main.scss'
setup((app) => {
  registerPlugins(app);
});

/* snipped for brevity */

export const decorators = [withVuetifyTheme];