import { Locator } from "@playwright/test";

export class BaseComponent {
    protected baseLocator : Locator

    constructor(locator: Locator) {
        this.baseLocator = locator;
    }
}