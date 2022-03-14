import Foundation

@objc public class PluginAudienzz: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
