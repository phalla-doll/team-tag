import { MainToolbar } from "@/components/extended/main-toolbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Aurora Dream Corner Whispers */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background: `
        radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
        }}
      />
      {/* Cosmic Aurora */}
      <div
        className="absolute inset-0 z-0 dark:block"
        style={{
          backgroundImage: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
        }}
      />

      <MainToolbar />

      {/* Content to showcase the frosted glass effect */}
      <div className="pt-20 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frosted Glass Toolbar
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Card {i + 1}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This content demonstrates the frosted glass effect of the toolbar above.
                  The toolbar uses backdrop-blur and semi-transparent backgrounds.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
