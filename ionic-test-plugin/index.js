var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IonicTestPluginOriginal = /** @class */ (function (_super) {
    __extends(IonicTestPluginOriginal, _super);
    function IonicTestPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IonicTestPluginOriginal.prototype.pluginFunction = function () { return cordova(this, "pluginFunction", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    IonicTestPluginOriginal.prototype.pluginFunction2 = function (options) { return cordova(this, "pluginFunction2", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    IonicTestPluginOriginal.prototype.pluginFunction3 = function (options) { return cordova(this, "pluginFunction3", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    IonicTestPluginOriginal.pluginName = "IonicTestPlugin";
    IonicTestPluginOriginal.plugin = "cordova-plugin-ionic-test-plugin";
    IonicTestPluginOriginal.pluginRef = "IonicTestPlugin";
    IonicTestPluginOriginal.repo = "https://github.com/ionic-test-plugin";
    IonicTestPluginOriginal.platforms = ["iOS"];
    return IonicTestPluginOriginal;
}(IonicNativePlugin));
var IonicTestPlugin = new IonicTestPluginOriginal();
export { IonicTestPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvbmljLXRlc3QtcGx1Z2luL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSxPQUFPLDhCQUlOLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0JTLG1DQUFpQjs7OztJQVVwRCx3Q0FBYztJQVNkLHlDQUFlLGFBQUMsT0FBWTtJQVE1Qix5Q0FBZSxhQUFDLE9BQVk7Ozs7OzswQkFsRDlCO0VBdUJxQyxpQkFBaUI7U0FBekMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1vbmtleSB7XG5cbiAgcGx1Z2luTW9ua2V5KG9wdGlvbnM6IGFueSk6IFByb21pc2U8YW55PjtcblxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0lvbmljVGVzdFBsdWdpbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvbmljLXRlc3QtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnSW9uaWNUZXN0UGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZXN0LXBsdWdpbicsXG4gIHBsYXRmb3JtczogWydpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJb25pY1Rlc3RQbHVnaW4gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBZb3VyIHBsdWdpbiBwbHVnaW4gZnVuY3Rpb25zIGdvIGhlcmUuIFxuICAgKiBGdW5jdGlvbiBuYW1lcyBzaG91bGQgbWF0Y2ggdGhlIG9uZXMgaW4geW91ciAuc3dpZnQgJiAuanMgZmlsZXMuXG4gICAqIE90aGVyd2lzZSB5b3Ugd29uJ3QgYmUgYWJsZSB0byBleGVjdXRlIHRoZW0uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDFcbiAgfSlcbiAgcGx1Z2luRnVuY3Rpb24oKTogUHJvbWlzZSA8IGFueSA+IHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBwbHVnaW5GdW5jdGlvbjIob3B0aW9uczogYW55KTogUHJvbWlzZSA8IGFueSA+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgcGx1Z2luRnVuY3Rpb24zKG9wdGlvbnM6IGFueSk6IFByb21pc2UgPCBhbnkgPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==