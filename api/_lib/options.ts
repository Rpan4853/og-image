import chrome from "chrome-aws-lambda";
const exePath =
  process.platform === "win32"
    ? "C:/Program Files/Google/Chrome/Application/chrome.exe"
    : process.platform === "linux"
    ? "/usr/bin/google-chrome"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

export async function getOptions(isDev: boolean) {
  let options: Options;
  if (isDev) {
    options = {
      args: [
        "--autoplay-policy=user-gesture-required",
        "--disable-background-networking",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-breakpad",
        "--disable-client-side-phishing-detection",
        "--disable-component-update",
        "--disable-default-apps",
        "--disable-dev-shm-usage",
        "--disable-domain-reliability",
        "--disable-extensions",
        "--disable-features=AudioServiceOutOfProcess",
        "--disable-hang-monitor",
        "--disable-ipc-flooding-protection",
        "--disable-notifications",
        "--disable-offer-store-unmasked-wallet-cards",
        "--disable-popup-blocking",
        "--disable-print-preview",
        "--disable-prompt-on-repost",
        "--disable-renderer-backgrounding",
        "--disable-setuid-sandbox",
        "--disable-speech-api",
        "--disable-sync",
        "--disk-cache-size=33554432",
        "--hide-scrollbars",
        "--ignore-gpu-blocklist",
        "--metrics-recording-only",
        "--mute-audio",
        "--no-default-browser-check",
        "--no-first-run",
        "--no-pings",
        "--no-sandbox",
        "--no-zygote",
        "--password-store=basic",
        "--use-gl=swiftshader",
        "--use-mock-keychain",
        "--gpu-rasterization-msaa-sample-count",
        "--ignore-gpu-blocklist",
        "--enable-zero-copy",
        "--proxy-server='direct://'",
        "--proxy-bypass-list=*",
      ],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: [
        ...chrome.args,
        "--gpu-rasterization-msaa-sample-count",
        "--ignore-gpu-blocklist",
        "--enable-zero-copy",
        "--proxy-server='direct://'",
        "--proxy-bypass-list=*",
      ],
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }
  return options;
}
