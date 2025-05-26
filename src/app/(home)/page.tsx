import InputField from "@/components/molecules/InputField";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-dark-blue">
      <div className="size-64 w-96">
        <h1 className="text-center text-2xl font-bold uppercase text-indigo-600">
          Beresin
        </h1>
        <form className="mt-5 flex w-full flex-col gap-2 rounded-xl border border-secondary-3 bg-secondary-1 p-8">
          <InputField
            type="text"
            label="Username"
            placeholder="Ketik Username"
            name="username"
          />
          <InputField
            type="password"
            label="Password"
            placeholder="Ketik password"
            name="password"
          />
          <button className="w-full rounded-md bg-indigo-500 px-4 py-2 text-center text-base font-semibold text-white hover:bg-indigo-600">
            Submit
          </button>
        </form>
        <p className="mt-3 text-center text-base text-white">
          Don&apos;t have account?{" "}
          <Link href="#" className="font-semibold text-indigo-600">
            Register Account
          </Link>
        </p>
      </div>
    </div>
  );
}
