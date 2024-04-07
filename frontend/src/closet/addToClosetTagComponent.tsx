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
    // Dynamically create a schema from the array
    const formSchema = z.object(
        tags.reduce((acc, fieldName) => {
            acc[fieldName] = z.string().min(3).max(25);
            return acc;
        }, {} as { [key: string]: z.ZodType<string, z.ZodTypeDef, string> })
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: tags.reduce((acc, fieldName) => { 
            acc[fieldName] = "";
            return acc;
        }, {} as Record<string, string>)
    });

    const handleSubmit = useCallback((values: z.infer<typeof formSchema>) => {
        console.log("Form is submitted!", values);
    }, []);

    return (
        <>
            <Form {...form}>

                
            {/* Image div */}
            <div className="flex justify-center items-center m-4">
            {/* image prompt */}
                <img src={blank} className='rounded-xl '/>
            </div>





                <form onSubmit={form.handleSubmit(handleSubmit)}>
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
