/* eslint-disable no-undef */

const fs = require('fs');
const path = require('path');

let environment = process.env.runEnv ? process.env.runEnv.trim() : "qa";
switch (process.env.runEnv) {
  case "blueQA":
    environment = "qa"
    break;
  case "greenQA":
    environment = "qa"
    break;
}

class DataUtils {

  getPortals() {
    const portalsPath = path.join(__dirname, '../test_data/portals.json');
    const rawData = fs.readFileSync(portalsPath);
    return JSON.parse(rawData);
  }

   /**
    * @param {string} portal
    */
  getLoginCredentials(portal) {
    let jsonData;
    switch (portal) {
      case "CC":
        jsonData = JSON.parse(JSON.stringify(require("../test_data/credentials.json")));
        break;
      default:
        throw new Error(`No credentials found for portal: ${portal}`);
    }
    return jsonData[environment];
  }

   /**
    * @param {import('@playwright/test').BrowserContext} context
    * @param {string} portalName
    * @returns {import('@playwright/test').Page}
    */
  async getPage(context, portalName) {
    const portalUrl = this.getPortals()[portalName].url;
    const { host } = new URL(portalUrl);
    const page = context.pages().find(page => {
      const { host: pageHost } = new URL(page.url());
      return pageHost === host;
    })
    return page ? page : context.newPage();
  }


  getDataForRCAModel(entity) {
    const jsonData = JSON.parse(
      JSON.stringify(require("../test_data/CC_est_data.json"))
    );
    let data = jsonData[entity];    
    return data;
  }
}

module.exports = { DataUtils };
