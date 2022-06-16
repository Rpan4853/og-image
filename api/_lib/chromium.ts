import core from "puppeteer-core";
import { getOptions } from "./options";
let _page: core.Page | null;

async function getPage(isDev: boolean) {
  if (_page) {
    return _page;
  }
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  _page = await browser.newPage();
  return _page;
}

export async function getScreenshot(
  html: string,
  isDev: boolean,
  width: number,
  height: number
) {
  const page = await getPage(isDev);
  await page.setViewport({ width: width, height: height });
  await page.setContent(html);
  const file = await page.screenshot({ type: "jpeg", quality: 85 });
  return file;
}
