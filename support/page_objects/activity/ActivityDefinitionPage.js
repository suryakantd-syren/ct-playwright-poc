import { expect } from '@playwright/test';

class ActivityDefinitionPage {
    constructor(page) {
        
        this.page = page;

        this.propertyBlock = this.page.locator('div.block-properties-container');
        this.blockPropSaveButton = this.page.locator('div.block-properties-container div.button-container-container [data-testid="save"]');
        this.formWrapper = this.page.locator('div.block-properties-form').locator('div.form-field');

        this.exitConditonTab = this.propertyBlock.locator('div.cds--tab--list button').nth(1);
        this.addRuleBtn = this.propertyBlock.locator('button.ruleGroup-addRule');
        this.ruleDiv = this.propertyBlock.locator('[data-testid="rule"]');
        this.ruleField = this.ruleDiv.locator('div.rule-fields select#selector-label');
        this.ruleOperatorOne = this.ruleDiv.locator('input#txt-input');
        this.ruleOperatorSecond = this.ruleDiv.locator('div.rule-operators').nth(1).locator('select#selector-label');
        this.ruleOperand = this.ruleDiv.locator('input#operand-input');

        this.drawerCloseBtn = this.propertyBlock.locator('span.drawer-close');

        this.dropTargetZone = this.page.locator('div.reactflow-wrapper');
        this.dragBlockByTray = (blockName) => this.page.locator(`div.block-tray .${blockName}`);
        this.draggedBlock = (blockName) => this.page.locator(`div.react-flow__node-${blockName}`);
        this.draggedBlockDiv = (blockName) => this.page.locator(`div.react-flow__nodes .react-flow__node-${blockName}`);

        this.startNodePoint = this.page.locator('div.react-flow__node-START_EVENT div.react-flow__handle-right');
        this.blockNodeStartPoint = (endNode) => this.page.locator(`div.react-flow__node-${endNode} div.react-flow__handle-right`);
        
        this.endNodePoint = this.page.locator('div.react-flow__node-END_EVENT div.react-flow__handle-left');
        this.blockNodeEndPoint = (startNode) => this.page.locator(`div.react-flow__node-${startNode} div.react-flow__handle-left`);

        this.saveActivityBtn = this.page.locator('button#saveactivity');

        this.tableData = this.page.locator('.cds--data-table-content');
        this.searchBtn = this.page.locator('div.headers div.cds--search-magnifier');
        this.searchInputBox = this.page.locator('input.cds--search-input');
    }

    // Activity Define Form
    async fillActivityDefination() {
        const formField = await this.propertyBlock.locator('div.form-field');

        const fieldOne = formField.first();
        const inputfield = await fieldOne.locator("input#name").first();
        await expect(inputfield).toBeVisible();
        await inputfield.fill('Demo-Activity');

        const fieldSecond = formField.nth(1);
        const descriptionField = await fieldSecond.locator("textarea#description").first();
        await expect(descriptionField).toBeVisible();
        await descriptionField.fill('Demo-Activity Description');

        await this.blockPropSaveButton.first().click();

    }

    // Task Drag and Drop
    async dragBlock(blockName) {
        this.page.waitForTimeout(9000);
        const dropTarget = this.dropTargetZone;
        const dragPartner = this.dragBlockByTray(blockName);
        await dragPartner.dragTo(dropTarget);
        await dragPartner.hover();
        await this.page.mouse.down();
        //await this.draggedBlock(blockName).click();
    }

    // Task Define Form
    async fillsDetails(blockName) {
        this.page.waitForTimeout(9000);
        // Define Form
        await this.draggedBlockDiv(blockName).click();
        const topWrapper = await this.formWrapper;
        const fieldOne = topWrapper.first();
        const taskInputfield = await fieldOne.locator("input#name").first();
        await expect(taskInputfield).toBeVisible();
        await this.page.waitForTimeout(30);
        await taskInputfield.fill("Demo task");
        const fieldSecond = topWrapper.nth(1);
        const taskDesfield = await fieldSecond.locator("input#description").first();
        await expect(taskDesfield).toBeVisible();
        await taskDesfield.fill('Partner-Task-Description');
        await this.blockPropSaveButton.first().click();
    }

    // Exit Validation
    async exitCondition() {
        this.page.waitForTimeout(9000);
        await this.exitConditonTab.click();
        await this.addRuleBtn.click();
        
        await this.ruleField.locator('option').first().click();
        //await this.page.waitForTimeout(30);
        await this.ruleOperatorOne.fill('demo-data-1');
        await this.ruleOperatorSecond.locator('option').first().click();

        await this.ruleOperand.fill('demo-data-2');

        await this.blockPropSaveButton.nth(1).click();
        await this.drawerCloseBtn.click();

    }

    async connectTaskNode(startTaskNode, endTaskNode) {
        const startnodeTarget = this.blockNodeStartPoint(startTaskNode);
        await startnodeTarget.hover();
        await this.page.mouse.down();
        const endtnodeTarget = this.blockNodeStartPoint(endTaskNode);
        await endtnodeTarget.hover();
        await this.page.mouse.up();
    }

    async connectsNode(startNode, endNode) {
        this.page.waitForTimeout(9000);
        // ------------------------------------- Start Edges ----------------------------------------------------
        //await this.page.waitForTimeout(10000);
        const startSource = await this.startNodePoint;
        await startSource.hover();
        await this.page.mouse.down();

        const startnodeTarget = this.blockNodeEndPoint(startNode);
        await startnodeTarget.hover();
        await this.page.mouse.up();

        // ------------------------------------- End Edges ----------------------------------------------------
        //await this.page.waitForTimeout(10000);
        const endnodeTarget = await this.blockNodeStartPoint(endNode);
        await endnodeTarget.hover();
        await this.page.mouse.down();

        const endSource = await this.endNodePoint;
        await endSource.hover();
        await this.page.mouse.up();
    }

    async saveActivity() {
        const activitySaveBtn = await this.saveActivityBtn;
        await expect(activitySaveBtn).toBeVisible();
        await activitySaveBtn.click();
    }

    async activityVerify() {
        await this.page.waitForTimeout(5);
        await this.searchBtn.click();
        await this.searchInputBox.fill('Demo-Activity');
        const row = await this.tableData.locator('tr');
        const name = await row.nth(1).locator('td').nth(0).locator('span.information-text').innerText();
        await expect(name).toContain('Demo-Activity');
    }

    async verifyActivityName(activityName) {
        const header = await this.page.locator(".header-title");
        const headertext= await header.innerText();
        expect(headertext).toBe(activityName);
    }
}


module.exports = { ActivityDefinitionPage };