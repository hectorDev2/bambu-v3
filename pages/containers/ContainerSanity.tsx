import React from "react";
import { cache } from "react";
import { client } from "../../../sanity/lib/client";
export const ContainerSanity = ({ children }: { children: any }) => {
  const clientFetch = cache(client.fetch.bind(client));

  return <>{children}</>;
};
