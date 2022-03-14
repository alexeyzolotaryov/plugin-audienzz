import { registerPlugin } from '@capacitor/core';

import type { PluginAudienzzPlugin } from './definitions';

const PluginAudienzz = registerPlugin<PluginAudienzzPlugin>('PluginAudienzz', {
  web: () => import('./web').then(m => new m.PluginAudienzzWeb()),
});

export * from './definitions';
export { PluginAudienzz };
