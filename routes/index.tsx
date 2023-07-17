import { Handlers } from "$fresh/server.ts";
import { PageHeader } from "../components/PageHeader.tsx";
import Form from "../islands/Form.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();
    const username = form.get("username");
    const password = form.get("password");
    const resp = await fetch("https://signup-api.deno.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    /*
    * If the POST request is successful, redirect user
    * to success page; otherwise, to the error page
    */ 
    if(resp.ok){
      return new Response('', {
        status: 303,
        headers:{ Location: '/success'}
      });
    } else {
      return new Response('', { 
        status: 500,
        headers: { Location: '/error'}
      });
    }
  }
};

export default function Home() {

  return (
    <>
      <PageHeader />
      <Form />
    </>
  );
}
