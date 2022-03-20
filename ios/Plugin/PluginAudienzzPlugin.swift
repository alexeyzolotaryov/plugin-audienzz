import Foundation
import Capacitor

@objc(PluginAudienzz)
public class PluginAudienzz: CAPPlugin {

    private let banner = AudienzzBanner()

    @objc func showBanner(_ call: CAPPluginCall) {
        let placementId = getAdId(call, "17058950")

        DispatchQueue.main.async {
            self.banner.showBanner(call, placementId)
        }
    }

    private func getAdId(_ call: CAPPluginCall, _ testingID: String) -> String {
        let placementId = call.getString("placementId") ?? testingID

        return placementId
    }
}

