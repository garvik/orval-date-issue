import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "./schema.json",
    output: {
      target: "./src/generated",
      client: "react-query",
      httpClient: "fetch",
      clean: true,
      mock: true
    },
  },
});
