export interface PluginAudienzzPlugin {
  showBanner(options: {
    placementId: string;
  }): Promise<{ placementId: string }>;
}
