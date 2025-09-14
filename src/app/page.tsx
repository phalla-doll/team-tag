import { MainToolbar } from "@/components/extended/main-toolbar";
import { UserInputSection } from "@/components/extended/user-input-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#020617] relative">
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)`,
          backgroundSize: "100% 100%",
        }}
      />

      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(6,182,212,0.4), transparent)`,
        }}
      /> */}

      <MainToolbar />
      <UserInputSection />
    </div>
  );
}
