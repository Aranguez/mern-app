module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => /\bWIP\b/i.test(message)],
};
