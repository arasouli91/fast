import type { FASTElement } from "@microsoft/fast-element";

/**
 * The type of element that a {@link (DesignToken:interface)} can be set for.
 * @alpha
 */
export type DesignTokenTarget = (HTMLElement & FASTElement) | HTMLBodyElement;

/**
 * A {@link (DesignToken:interface)} value that is derived. These values can depend on other {@link (DesignToken:interface)}s
 * or arbitrary observable properties.
 * @alpha
 */
export type DerivedDesignTokenValue<T> = T extends Function
    ? never
    : (target: DesignTokenTarget) => T;

/**
 * A design token value with no observable dependencies
 * @alpha
 */
export type StaticDesignTokenValue<T> = T extends Function ? never : T;

/**
 * The type that a {@link (DesignToken:interface)} can be set to.
 * @alpha
 */
export type DesignTokenValue<T> = StaticDesignTokenValue<T> | DerivedDesignTokenValue<T>;
