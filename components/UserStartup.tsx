import React from "react";
import StartupCard, { StartupTypeCard } from "./StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_ID_QUERY } from "@/sanity/lib/queries";

async function UserStartup({ id }: { id: string }) {
  const startups = await client.fetch(STARTUPS_BY_ID_QUERY, { id });
  return (
    <>
      {startups.lengthh > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
}

export default UserStartup;
