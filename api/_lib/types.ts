export type FileType = "png" | "jpeg";

export interface ParsedRequest {
  fileType: FileType;
  title: string;
  subtitle: string;
  naturalStat: string;
  industrialStat: string;
  pollutionStat: string;
  infrastructureStat: string;
  goodNewsStat: string;
  width?: number;
  height?: number;
}
