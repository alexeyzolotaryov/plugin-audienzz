#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

@interface PluginAudienzz : CAPPlugin
@end

@implementation PluginAudienzz

- (void)showBanner:(CAPPluginCall*)call
{
    NSLog(@"ПРОСТО ТЕСТ СТАРТА ПЛАГИНА %@", call.options[@"placementId"]);
}

@end

