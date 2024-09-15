import { cookieBasedClient, isAuthenticated } from "./utils/amplify-utils";


export default async function Home() {
  const isSignedIn = await isAuthenticated();
  const { data: posts } = await cookieBasedClient.models.Post.list({
    selectionSet: ["title", "id"],
    authMode: isSignedIn ? "userPool" : "iam",
  })
  console.log('posts', posts)
  return (
   <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto gap-4">
    <h1>  List Of All Titles{!isSignedIn ? " (From All Users)" : ""}</h1>
    {posts?.map(async (post,idx) => (
      <div key={idx}>
        <div>{post.title}</div>
      </div>
    ))}
    
   </main>
  );
}
