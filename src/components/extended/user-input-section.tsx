"use client";

import { Download, Megaphone } from "lucide-react";
import { useState, useCallback } from "react";
import BlurEffect from "react-progressive-blur";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ImageUpload from "@/components/extended/image-upload";

interface FormData {
    id: string;
    name: string;
    description: string;
    image: File | null;
    imagePreview: string;
}

export function UserInputSection() {
    const [formData, setFormData] = useState<FormData>({
        id: "",
        name: "",
        description: "",
        image: null,
        imagePreview: "",
    });

    const handleInputChange = useCallback(
        (field: keyof FormData, value: string) => {
            setFormData((prev) => ({
                ...prev,
                [field]: value,
            }));
        },
        [],
    );

    const handleImageChange = useCallback(
        (file: File | null, preview: string) => {
            setFormData((prev) => ({
                ...prev,
                image: file,
                imagePreview: preview,
            }));
        },
        [],
    );

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    return (
        <div className="container mx-auto py-32 flex flex-col space-y-10">
            <div className="space-y-2">
                <div className="">
                    <Badge variant="outline">
                        <Megaphone className="size-4" /> 23,000+ Tags Generated
                    </Badge>
                </div>
                <h1 className="text-4xl font-medium tracking-tight text-gray-900 dark:text-white">
                    A Cooler Way to Create Social Media Tags.
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-base">
                    TagGenerator is a platform for creating free social media tags for your
                    social media.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Enter Information Below to Generate a Tag
                    </h4>
                    <Card className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg p-6 shadow-lg">
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* ID Field */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="id"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        ID
                                    </Label>
                                    <Input
                                        id="id"
                                        type="text"
                                        placeholder="Enter ID"
                                        value={formData.id}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "id",
                                                e.target.value,
                                            )
                                        }
                                        className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                                    />
                                </div>

                                {/* Name Field */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Enter full name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "name",
                                                e.target.value,
                                            )
                                        }
                                        className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                                    />
                                </div>

                                {/* Position Field */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="position"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Description
                                    </Label>
                                    <Input
                                        id="description"
                                        type="text"
                                        placeholder="Enter description"
                                        value={formData.description}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "description",
                                                e.target.value,
                                            )
                                        }
                                        className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600"
                                    />
                                </div>

                                {/* Image Upload Field */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="image"
                                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Image
                                    </Label>
                                    <ImageUpload
                                        onImageChange={handleImageChange}
                                    />
                                </div>

                                {/* Submit Button */}
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center w-full">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Preview
                    </h4>
                    <Card className="bg-white/20 max-w-sm min-h-120 py-0 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 rounded-lg shadow-lg w-full overflow-hidden relative h-80">
                        {formData.imagePreview ? (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(${formData.imagePreview})`,
                                    }}
                                />
                                <BlurEffect
                                    className="w-full h-full"
                                    intensity={50}
                                    position="bottom"
                                />
                            </>
                        ) : (
                            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />
                        )}
                        <CardContent className="relative z-10 flex flex-col justify-end h-full p-6">
                            <div className="text-center space-y-2">
                                <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                                    {formData.name || "Your Name"}
                                </h3>
                                <p className="text-gray-200 drop-shadow-md">
                                    {formData.description || "Your Description"}
                                </p>
                                <p className="text-sm text-gray-300 drop-shadow-md">
                                    ID: {formData.id || "Your ID"}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Button
                        type="submit"
                        className="w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                        <Download className="size-4" />
                        Download Card
                    </Button>
                </div>
            </div>
        </div>
    );
}
