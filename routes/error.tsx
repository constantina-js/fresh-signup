import { Head, asset } from "$fresh/runtime.ts";
import { PageHeader } from "../components/PageHeader.tsx";

export default function Error() {

    return (
      <>
        <PageHeader />
        <main>
            <div className="submit-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-sad-dizzy" width={50} height={50} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0"></path>
                    <path d="M8 9l2 2"></path>
                    <path d="M10 9l-2 2"></path>
                    <path d="M14 9l2 2"></path>
                    <path d="M16 9l-2 2"></path>
                </svg>
                <h2>Oh no! Something went wrong!</h2>
                <span>You have not successfully signed up for the thing.</span>
                <span>Return <a href="/">back to the form </a> and try again.</span>
            </div>
        </main>
      </>
    );
  }

  