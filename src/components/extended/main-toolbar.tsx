import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/extended/theme-switcher"
import { MainLogo } from "@/components/branding/main-logo"

export function MainToolbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 m-2">
            <div className="container mx-auto bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-lg rounded-2xl">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center space-x-2">
                        <MainLogo />
                    </div>

                    <div className="flex items-center space-x-2">
                        <ThemeSwitcher />
                        <Button variant="ghost" size="sm">
                            Advertise with us?
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}