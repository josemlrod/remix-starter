import type { MetaFunction } from "@remix-run/node";
import { ModeToggle } from "~/components/mode-toggle";
import { Button } from "~/components/ui/button";
import db from "~/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const response = await db.query.users.findMany();
  // console.log({ response });

  return null;
}

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl font-thin">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <Button variant="default" onClick={() => console.log("roosevelt")}>
          Feels right
        </Button>
        <ModeToggle />
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
