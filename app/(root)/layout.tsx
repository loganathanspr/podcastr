import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar></LeftSidebar>
        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between mx:hidden">
              <Image
                src="/icons/logo.svg"
                alt="menu icon"
                height={30}
                width={30}
              />
              <MobileNav></MobileNav>
            </div>
            <div className="flex flex-col md:pb-14">
              <p className="text-white-1">Toaster (notification popups)</p>
              {children}
            </div>
          </div>
        </section>
        <RightSidebar></RightSidebar>
      </main>
    </div>
  );
}
