import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone } from "lucide-react";

export function UserInputSection() {
    return (
        <div className="container mx-auto py-32 flex flex-col space-y-10">
            <div className="space-y-2">
                <div className="">
                    <Badge variant="outline"><Megaphone className="size-4" /> 23,000+ Cards Generated</Badge>
                </div>
                <h1 className="text-4xl font-medium tracking-tight text-gray-900 dark:text-white">
                    A Cooler Way to Create Team Tags.
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-base">
                    TeamTag is a platform for creating free team tags for your team.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Enter Information Below
                    </h4>
                    <Card className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg p-6 shadow-lg">
                        <CardContent>

                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Preview
                    </h4>
                    <Card className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg p-6 shadow-lg">
                        <CardContent>
                            ហេលឡូ
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}