import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

const getDefault = (value: string, defaultValue: string): string => {
  if (typeof value === "string" || value === undefined) {
    return value ? value : defaultValue;
  } else {
    throw new Error("Invalid parameter");
  }
};

export function parseRequest(req: IncomingMessage) {
  const { query } = parse(req.url || "/", true);
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

  const parsedRequest: ParsedRequest = {
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
