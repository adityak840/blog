import { useLoaderData } from "@remix-run/react";
import { getBlog, getPosts , getOverviewData } from "~/models/post.server";
export const loader = async () => {
  return getBlog("5c556da3-7cf1-4323-8709-f2b3250ead58");
  return getOverviewData(2) ; 
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return <div>Hello world</div>;
}
