import { Head, asset } from "$fresh/runtime.ts";

/*
* Since this gets reused multiple times, I figured
* it would be better if it were its own component
*/
export function PageHeader() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Frontend Take Home Assessment for Connie Scoullis" />
                <title>A Fresh Sign Up Form</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
                <link rel="stylesheet" href={asset("/index.css")} />
            </Head>
            <header>
                <h1>A Fresh Sign Up Form</h1>
                <h2>Sign up for a thing</h2>
            </header>
        </>
    );
  }
  