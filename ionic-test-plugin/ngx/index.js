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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var IonicTestPlugin = /** @class */ (function (_super) {
    __extends(IonicTestPlugin, _super);
    function IonicTestPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IonicTestPlugin.prototype.pluginFunction = function () { return cordova(this, "pluginFunction", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    IonicTestPlugin.prototype.pluginFunction2 = function (options) { return cordova(this, "pluginFunction2", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    IonicTestPlugin.prototype.pluginFunction3 = function (options) { return cordova(this, "pluginFunction3", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    IonicTestPlugin.pluginName = "IonicTestPlugin";
    IonicTestPlugin.plugin = "cordova-plugin-ionic-test-plugin";
    IonicTestPlugin.pluginRef = "IonicTestPlugin";
    IonicTestPlugin.repo = "https://github.com/ionic-test-plugin";
    IonicTestPlugin.platforms = ["iOS"];
    IonicTestPlugin = __decorate([
        Injectable()
    ], IonicTestPlugin);
    return IonicTestPlugin;
}(IonicNativePlugin));
export { IonicTestPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2lvbmljLXRlc3QtcGx1Z2luL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLDhCQUlOLE1BQU0sb0JBQW9CLENBQUM7O0lBZ0JTLG1DQUFpQjs7OztJQVVwRCx3Q0FBYztJQVNkLHlDQUFlLGFBQUMsT0FBWTtJQVE1Qix5Q0FBZSxhQUFDLE9BQVk7Ozs7OztJQTNCakIsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlOzBCQXZCNUI7RUF1QnFDLGlCQUFpQjtTQUF6QyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmEsXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTW9ua2V5IHtcblxuICBwbHVnaW5Nb25rZXkob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+O1xuXG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW9uaWNUZXN0UGx1Z2luJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMtdGVzdC1wbHVnaW4nLFxuICBwbHVnaW5SZWY6ICdJb25pY1Rlc3RQbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlc3QtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElvbmljVGVzdFBsdWdpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFlvdXIgcGx1Z2luIHBsdWdpbiBmdW5jdGlvbnMgZ28gaGVyZS4gXG4gICAqIEZ1bmN0aW9uIG5hbWVzIHNob3VsZCBtYXRjaCB0aGUgb25lcyBpbiB5b3VyIC5zd2lmdCAmIC5qcyBmaWxlcy5cbiAgICogT3RoZXJ3aXNlIHlvdSB3b24ndCBiZSBhYmxlIHRvIGV4ZWN1dGUgdGhlbS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMVxuICB9KVxuICBwbHVnaW5GdW5jdGlvbigpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHBsdWdpbkZ1bmN0aW9uMihvcHRpb25zOiBhbnkpOiBQcm9taXNlIDwgYW55ID4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBwbHVnaW5GdW5jdGlvbjMob3B0aW9uczogYW55KTogUHJvbWlzZSA8IGFueSA+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19