import { css } from "@microsoft/fast-element";
import type { ElementStyles } from "@microsoft/fast-element";
import { forcedColorsStylesheetBehavior } from "@microsoft/fast-foundation";
import { neutralDividerRestBehavior, neutralFillRestBehavior } from "../styles/recipes";

/**
 * Styles for the {@link @microsoft/fast-components#FASTDataGridRow|FASTDataGridRow} component.
 *
 * @public
 */
export const DataGridRowStyles: ElementStyles = css`
    :host {
        display: grid;
        padding: 1px 0;
        box-sizing: border-box;
        width: 100%;
        border-bottom: calc(var(--outline-width) * 1px) solid var(--neutral-divider-rest);
    }

    :host(.header) {
    }

    :host(.sticky-header) {
        background: ${neutralFillRestBehavior.var};
        position: sticky;
        top: 0;
    }
`.withBehaviors(
    neutralDividerRestBehavior,
    neutralFillRestBehavior,
    forcedColorsStylesheetBehavior(
        css`
            :host {
            }
        `
    )
);