import UserNameForm from "@/components/UserNameForm";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] px-4">
        <UserNameForm />
      </div>
    </>
  );
}
