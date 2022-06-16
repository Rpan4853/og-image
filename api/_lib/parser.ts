import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

const getDefault = (value: string, defaultValue: string): string => {
  return value ? value : defaultValue;
};

export function parseRequest(req: IncomingMessage) {
  const { pathname, query } = parse(req.url || "/", true);
  const {
    title,
    subtitle,
    naturalStat,
    industrialStat,
    pollutionStat,
    infrastructureStat,
    goodNewsStat,
    width,
    height,
  } = query || {};

  const arr = (pathname || "/").slice(1).split(".");
  let extension = arr.pop() as string;

  const parsedRequest: ParsedRequest = {
    fileType: extension === "jpeg" ? extension : "png",
    title: getDefault(title as string, "Title"),
    subtitle: getDefault(subtitle as string, "subtitle"),
    naturalStat: getDefault(naturalStat as string, "0"),
    industrialStat: getDefault(industrialStat as string, "0"),
    pollutionStat: getDefault(pollutionStat as string, "0"),
    infrastructureStat: getDefault(infrastructureStat as string, "0"),
    goodNewsStat: getDefault(goodNewsStat as string, "0"),
    width: parseInt(getDefault(width as string, "1200")),
    height: parseInt(getDefault(height as string, "630")),
  };
  return parsedRequest;
}
