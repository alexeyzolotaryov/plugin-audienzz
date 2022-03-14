export interface PluginAudienzzPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
