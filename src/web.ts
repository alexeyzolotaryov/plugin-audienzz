import { WebPlugin } from '@capacitor/core';

import type { PluginAudienzzPlugin } from './definitions';

export class PluginAudienzzWeb
  extends WebPlugin
  implements PluginAudienzzPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
