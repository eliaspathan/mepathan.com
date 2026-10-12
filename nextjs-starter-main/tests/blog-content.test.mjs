import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const postsDir = path.join(process.cwd(), "src", "content", "posts");

test("blog content directory contains at least one markdown post", () => {
  assert.equal(fs.existsSync(postsDir), true, "Expected src/content/posts to exist");

  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"));
  assert.ok(files.length > 0, "Expected markdown posts to exist");

  for (const file of files) {
    const content = fs.readFileSync(path.join(postsDir, file), "utf8");
    assert.match(content, /^---\r?\n/, "Expected YAML frontmatter at the start of the file");
    assert.match(content, /title:/, "Expected a title field in frontmatter");
  }
});
