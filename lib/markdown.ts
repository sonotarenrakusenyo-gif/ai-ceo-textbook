import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export function getMarkdownContent(filename: string): string {
  const filePath = path.join(contentDir, filename);
  return fs.readFileSync(filePath, "utf-8");
}

export function stripNavLinks(content: string): string {
  return content
    .replace(/\[←[^\]]*\]\([^)]*\)\s*\|[^\n]*/g, "")
    .replace(/^#\s+.+$/m, "")
    .trim();
}
