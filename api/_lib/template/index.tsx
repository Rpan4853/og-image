import * as React from "react";
import ReactDOMServer from "react-dom/server";
import { ParsedRequest } from "../types";
import { App } from "./app";

export default function getHtml(parsedReq: ParsedRequest) {
  return `<!DOCTYPE html>
      ${ReactDOMServer.renderToStaticMarkup(<App {...parsedReq} />)}`;
}
