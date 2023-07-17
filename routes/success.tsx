import { Head, asset } from "$fresh/runtime.ts";
import { PageHeader } from "../components/PageHeader.tsx";

export default function Success() {

    return (
      <>
        <PageHeader />
        <main>
            <div className="submit-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkbox" width={50} height={50} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 11l3 3l8 -8"></path>
                    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path>
                </svg>
                <h2>Success!</h2>
                <span>You have successfully signed up for the thing!</span>
            </div>
        </main>
      </>
    );
  }

  