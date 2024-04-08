import React, { useCallback } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import blank from '../assets/blank_img.png'

interface AddToClosetTagComponentProps {
    tags: string[];
}

// Memoized Form Field to prevent unnecessary re-renders
const MemoizedFormField = React.memo(({ tag, control }: { tag: string; control: any }) => {
    console.log("form field rerender")
    return (
        <FormField
            key={tag}
            control={control}
            name={tag}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{tag}</FormLabel>
                    <FormControl>
                        <Input 
                            placeholder={tag}
                            {...field}
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
});

function AddToClosetTagComponent({ tags }: AddToClosetTagComponentProps) {
    // ? The first half of this section is logic for the form 

    // Dynamically create a schema from the array
    // Creates a zod "schema" object, where you can define the rules
    const formSchema = z.object(
        tags.reduce((acc, fieldName) => {
            acc[fieldName] = z.string().min(3).max(25);
            return acc;
        }, {} as { [key: string]: z.ZodType<string, z.ZodTypeDef, string> })
    );

    // Creates a zod "resolver" object, taking the schema from above, and also creating default values. 
    // Default values are derived from the tags array too
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: tags.reduce((acc, fieldName) => { 
            acc[fieldName] = "";
            return acc;
        }, {} as Record<string, string>)
    });

    // ? This next half is logic for choosing an image

    const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = React.useState<string>(blank);
    const imgInputRef = React.useRef<HTMLInputElement>(null)

    // Ensure the ref and current are not null before calling click
    const handleButtonClick = () => {
        if (imgInputRef.current) {
            imgInputRef.current.click();
        }
    };

    // Handle file selection
    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("upload file clicked!")
        
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            console.log(file)
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    }, []);


// Handling submission by appending the image to the form data
// Note: Add a new state to track if the form is being submitted
const [isSubmitting, setIsSubmitting] = React.useState(false);

const handleSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    // Create a FormData object to combine file with other form data
    const formData = new FormData();

    // Append file to formData if it exists
    if (selectedImage) {
        console.log("You added a new image!")
        formData.append("selectedImage", selectedImage);
    }

    // Append other form values to formData
    Object.keys(values).forEach(key => {
        formData.append(key, values[key]);
    });

    // Set form submission state to true
    setIsSubmitting(true);

    // Example of handling form data submission (e.g., via fetch or axios)
    try {
        console.log("Form is submitted!", formData);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    } catch (error) {
        console.error("Submission error:", error);
        // Handle error (e.g., showing an error message)
    } finally {
        // Reset form submission state
        setIsSubmitting(false);
    }
}, [selectedImage]);


    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>

                    {/* Image area */}
                    <div className="flex justify-center items-center m-4">
                        {/* Hidden file input */}
                        <input 
                            type="file" 
                            ref={imgInputRef} 
                            onChange={handleFileChange}
                            style={{display: 'none'}}
                        />
                        
                        {/* Custom button that opens the file input when clicked */}
                        <button onClick={handleButtonClick}>
                            <img src={previewUrl} 
                                className='rounded-xl'
                                alt="Default picture"
                            />
                        </button>
                    </div>
                    
                    {/* ? Tags area */}
                    {tags.map((tag) => (
                        <MemoizedFormField key={tag} tag={tag} control={form.control} />
                    ))}
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </Form>
        </>
    );
}

export default AddToClosetTagComponent;
