"use server";

import { redirect } from "next/navigation";
import { cookieBasedClient } from "../utils/amplify-utils";


export async function createPost(formData: FormData) {
    const { data, errors } = await cookieBasedClient.models.Post.create({
      title: formData.get("title")?.toString() || "",
    });
    console.log("create post data", data, errors);
    redirect("/");
  }