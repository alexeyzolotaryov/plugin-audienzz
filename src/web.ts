import { WebPlugin } from '@capacitor/core';

import type { PluginAudienzzPlugin } from './definitions';

export class PluginAudienzzWeb
  extends WebPlugin
  implements PluginAudienzzPlugin {
  async showBanner(options: {
    placementId: string;
  }): Promise<{ placementId: string }> {
    console.log('ECHO', options);
    return options;
  }
}
