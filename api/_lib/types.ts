export type FileType = "png" | "jpeg";
export type Theme = "light" | "dark";

export interface ParsedRequest {
  fileType: FileType;
  title: string | string[] | undefined;
  subtitle: string | string[] | undefined;
  naturalStat: string | string[] | undefined;
  industrialStat: string | string[] | undefined;
  pollutionStat: string | string[] | undefined;
  infrastructureStat: string | string[] | undefined;
  goodNewsStat: string | string[] | undefined;
}
