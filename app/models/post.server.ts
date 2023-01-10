import { db } from "~/utils/db.server";



// Display Page
// get a post id 5c556da3-7cf1-4323-8709-f2b3250ead58
// will return --> Title , Content , Date , Tags

export async function getBlog(postId: string) {
  return db.post.findFirst({
    where: {
      PostId: postId,
    },
    select: {
      Title: true,
      ContentMarkdown: true,
      CreatedAt: true,
      Tags: true,
    },
  });
}

export async function getOverviewData(currentPage:number) {
  return  db.post.findMany({
    skip:currentPage*10, // skips that many element
    take:10 , 
    select: {
      Title: true,
      Tags: true,
      CreatedAt: true,
      Slug: true,
    },
  });
}
