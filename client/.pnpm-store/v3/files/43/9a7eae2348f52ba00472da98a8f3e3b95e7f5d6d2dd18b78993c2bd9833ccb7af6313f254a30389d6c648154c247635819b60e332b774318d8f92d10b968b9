import { BigNumber, CallOverrides } from "ethers";
import { z } from "zod";
export declare const BigNumberSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
export declare const BigNumberishSchema: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>;
export declare const BigNumberTransformSchema: z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, string, bigint | BigNumber>;
export declare const AddressSchema: z.ZodType<string, z.ZodTypeDef, string>;
export declare const AddressOrEnsSchema: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
export declare const RawDateSchema: z.ZodEffects<z.ZodDate, BigNumber, Date>;
/**
 * Default to now
 */
export declare const StartDateSchema: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
/**
 * Default to 10 years from now
 */
export declare const EndDateSchema: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
export declare const CallOverrideSchema: z.ZodType<CallOverrides>;
export declare const ChainInfoInputSchema: z.ZodObject<{
    rpc: z.ZodArray<z.ZodString, "many">;
    chainId: z.ZodNumber;
    nativeCurrency: z.ZodObject<{
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        decimals: number;
    }, {
        symbol: string;
        name: string;
        decimals: number;
    }>;
    slug: z.ZodString;
}, "strip", z.ZodTypeAny, {
    chainId: number;
    slug: string;
    rpc: string[];
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
    };
}, {
    chainId: number;
    slug: string;
    rpc: string[];
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
    };
}>;
export type ChainInfo = z.infer<typeof ChainInfoInputSchema>;
export type AddressOrEns = z.input<typeof AddressOrEnsSchema>;
export type Ens = `${string}.eth` | `${string}.cb.id`;
export type Address = string;
//# sourceMappingURL=shared.d.ts.map