export type FileType = "png" | "jpeg" | "webp";

export interface ParsedRequest {
  title: string;
  subtitle: string;
  naturalStat: string;
  industrialStat: string;
  pollutionStat: string;
  infrastructureStat: string;
  goodNewsStat: string;
  width: number;
  height: number;
}
