import { AsyncStorage } from "../../core/AsyncStorage";
import { TWConnector } from "../interfaces/tw-connector";
import { AbstractBrowserWallet, WalletOptions } from "./base";
export declare class InjectedWallet extends AbstractBrowserWallet {
    connector?: TWConnector;
    connectorStorage: AsyncStorage;
    static id: "injected";
    get walletName(): string;
    constructor(options: WalletOptions<{
        connectorStorage?: AsyncStorage;
    }>);
    protected getConnector(): Promise<TWConnector>;
}
//# sourceMappingURL=injected.d.ts.map