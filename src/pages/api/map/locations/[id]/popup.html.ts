import type { APIRoute } from "astro";
import { experimental_AstroContainer } from "astro/container";

import MarkerPopup from "@components/map/MarkerPopup.astro";

import { getLocation } from "@db/map";

export const GET: APIRoute = async ({ params }) => {
  const id = params.id;

  if (!id) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      statusText: "Not found",
    });
  }

  const location = await getLocation(id);

  if (!location) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      statusText: "Not found",
    });
  }

  const container = await experimental_AstroContainer.create();
  const html = await container.renderToString(MarkerPopup, {
    props: { location },
  });

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
