import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
