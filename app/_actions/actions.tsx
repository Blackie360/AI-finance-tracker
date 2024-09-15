"use server";

import { redirect } from "next/navigation";
import { cookieBasedClient } from "../utils/amplify-utils";
import { revalidatePath } from "next/cache";


export async function onDeletePost(id: string) {
  const { data, errors } = await cookieBasedClient.models.Post.delete({
    id,
  });

  console.log("data deleted", data, errors);
  revalidatePath("/");
}

export async function createPost(formData: FormData) {
    const { data, errors } = await cookieBasedClient.models.Post.create({
      title: formData.get("title")?.toString() || "",
    });
    console.log("create post data", data, errors);
    redirect("/");
  }