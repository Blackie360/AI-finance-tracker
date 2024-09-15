import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import outputs from '@/amplify_outputs.json';
import {cookies} from "next/headers"
import { getCurrentUser } from 'aws-amplify/auth/server';
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/data";
import config from "@/amplify_outputs.json"
import { Schema } from '@/amplify/data/resource';

export const cookieBasedClient = generateServerClientUsingCookies<Schema>({
    config,
    cookies,
    authMode: "userPool",
  });
  

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs
});

export const isAuthenticated = async () => 
    await runWithAmplifyServerContext({
        nextServerContext: {cookies},
        async operation(contextspec){
            try {
                const user = await getCurrentUser(contextspec);
                return !!user;
            } catch (error) {
                return false;
            }
        }
    })