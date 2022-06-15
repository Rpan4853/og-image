import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

export function parseRequest(req: IncomingMessage) {
  console.log("HTTP " + req.url);
  const { pathname, query } = parse(req.url || "/", true);
  const {
    title,
    subtitle,
    naturalStat,
    industrialStat,
    pollutionStat,
    infrastructureStat,
    goodNewsStat,
  } = query || {};

  const arr = (pathname || "/").slice(1).split(".");
  let extension = arr.pop() as string;

  const parsedRequest: ParsedRequest = {
    fileType: extension === "jpeg" ? extension : "png",
    title,
    subtitle,
    naturalStat,
    industrialStat,
    pollutionStat,
    infrastructureStat,
    goodNewsStat,
  };
  return parsedRequest;
}

// function getArray(stringOrArray: string[] | string | undefined): string[] {
//   if (typeof stringOrArray === "undefined") {
//     return [];
//   } else if (Array.isArray(stringOrArray)) {
//     return stringOrArray;
//   } else {
//     return [stringOrArray];
//   }
// }
