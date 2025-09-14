import Image from "next/image";
import Link from "next/link";

export function MainLogo() {
    return (
        <Link href="/">
            <div className="hidden sm:block">
                <Image
                    src="/logos/logo-white.svg"
                    className="hidden dark:block"
                    alt="TeamTag Logo White"
                    width={100}
                    height={100}
                />
                <Image
                    src="/logos/logo-dark.svg"
                    className="dark:hidden"
                    alt="TeamTag Logo Dark"
                    width={100}
                    height={100}
                />
            </div>
            <div className="block sm:hidden">
                <Image
                    src="/logos/single-logo-white.svg"
                    className="hidden dark:block"
                    alt="TeamTag Logo White"
                    width={24}
                    height={24}
                />
                <Image
                    src="/logos/single-logo-dark.svg"
                    className="dark:hidden"
                    alt="TeamTag Logo Dark"
                    width={24}
                    height={24}
                />
            </div>
        </Link>
    );
}
