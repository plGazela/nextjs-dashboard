import { 
  Post,
  Comment,
  User,
} from "@/lib/types";

export async function fetchStats() {
  try {
    const postsPromise = fetchPosts();
    const commentsPromise = fetchComments();
    const usersPromise = fetchUsers();
  
    const [posts, comments, users] = await Promise.all([
      postsPromise,
      commentsPromise,
      usersPromise,
    ]);
  
    return {
      postsCount: posts.length,
      commentsCount: comments.length,
      usersCount: users.length,
    };
  } catch (error) {
    throw new Error(`Failed to fetch stats: ${error}`);
  }
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${url}.`);
    }
    const data = await res.json();
  
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
}

export async function fetchPosts(): Promise<Post[]> {
  return fetchData("https://jsonplaceholder.typicode.com/posts");
}

export async function fetchComments(): Promise<Comment[]> {
  return fetchData("https://jsonplaceholder.typicode.com/comments");
}

export async function fetchUsers(): Promise<User[]> {
  return fetchData("https://jsonplaceholder.typicode.com/users");
}

export async function fetchLatestPosts(): Promise<Post[]> {
  return fetchData("https://jsonplaceholder.typicode.com/posts?_limit=5");
}

export async function fetchLatestComments(): Promise<Comment[]> {
  return fetchData("https://jsonplaceholder.typicode.com/commnets?_limit=5");
}
