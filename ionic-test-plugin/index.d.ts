import { IonicNativePlugin } from '@ionic-native/core';
export interface IMonkey {
    pluginMonkey(options: any): Promise<any>;
}
export declare class IonicTestPluginOriginal extends IonicNativePlugin {
    /**
     * Your plugin plugin functions go here.
     * Function names should match the ones in your .swift & .js files.
     * Otherwise you won't be able to execute them.
     */
    pluginFunction(): Promise<any>;
    pluginFunction2(options: any): Promise<any>;
    pluginFunction3(options: any): Promise<any>;
}

export declare const IonicTestPlugin: IonicTestPluginOriginal;