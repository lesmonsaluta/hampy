import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

interface AddToClosetTagComponentProps {
    tags: string[];
}

function addToClosetTagComponent({ tags }: AddToClosetTagComponentProps) {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        username: "",
        },
    })
 
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }


    function closetFormItem(tag : string) {
        return (
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>{tag}</FormLabel>
                    <FormControl>
                    <Input placeholder="" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                    This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                </FormItem>
                )}
            />
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {tags.map((tag) => closetFormItem(tag))}

            <div className="flex justify-center items-center">
                <Button type="submit" >Add to my closet!</Button>
            </div>
            </form>
        </Form>
    )

}

export default addToClosetTagComponent