module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      2,
      "always",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "type-enum": [
      2,
      "always",
      ["build", "feat", "fix", "docs", "chore", "style", "refactor", "test"],
    ],
  },
};
