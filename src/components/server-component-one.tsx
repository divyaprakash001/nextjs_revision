import fs from "fs";
import { ServerComponentTwo } from "./server-component-two";

export const ServerComponentOne = () => {
    // const content = fs.readFileSync("src/components/server-component-one.txt", "utf-8");
  return (
    <div>
      <h2>Server Component One</h2>
        <ServerComponentTwo />
    </div>
  );
};