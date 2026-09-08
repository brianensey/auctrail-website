import { spawn } from "node:child_process";

const forwarded = [];
const args = process.argv.slice(2);

for (let index = 0; index < args.length; index += 1) {
  const argument = args[index];

  if (argument === "--host") {
    forwarded.push("--hostname", args[index + 1]);
    index += 1;
    continue;
  }

  if (argument === "--strictPort") continue;
  forwarded.push(argument);
}

const child = spawn("next", ["dev", ...forwarded], {
  cwd: process.cwd(),
  shell: true,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 1));
