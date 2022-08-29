import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
  <>
  <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] absolute z-20">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div class="bg-amber-400 px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button class="mt-5">
      <div
        class="relative inline-block text-sm font-medium text-amber-400 group active:text-amber-500 focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-amber-400 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <Link to="/">Go Home</Link>
        </span>
      </div>
    </button>
</main>
  </>
  )
}
