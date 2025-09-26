import { Locator, Page } from "@playwright/test";

export class BaseLocators {
    protected baseLocator : Locator

    constructor(locator: Locator) {
        this.baseLocator = locator;
    }
}