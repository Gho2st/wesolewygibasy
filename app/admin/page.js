import BlogAdmin from "./blogAdmin";
import { logout } from "../lib/actions/auth";
import Header from "@/components/UI/Header";

export default function Admin() {
  return (
    <>
      <Header text="Admin" />
      <form action={logout}>
        <button
          className="m-3 cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-gray-500 text-sm font-medium rounded-lg transition-colors"
          type="submit"
        >
          Wyloguj się →
        </button>
      </form>
      <div className="px-[6%] py-24">
        <BlogAdmin />
      </div>
    </>
  );
}
