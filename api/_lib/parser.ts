import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

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
    title: title as string,
    subtitle: subtitle as string,
    naturalStat: naturalStat as string,
    industrialStat: industrialStat as string,
    pollutionStat: pollutionStat as string,
    infrastructureStat: infrastructureStat as string,
    goodNewsStat: goodNewsStat as string,
    width: width ? parseInt(width as string) : 1200,
    height: height ? parseInt(height as string) : 630,
  };
  return parsedRequest;
}
