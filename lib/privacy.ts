import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getPrivacyPolicyMarkdown(): Promise<string> {
  const filePath = path.join(process.cwd(), "content", "privacy.md");
  return readFile(filePath, "utf-8");
}
