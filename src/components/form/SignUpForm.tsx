'use client'

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { toast } from "sonner"


const formSchema = z.object({
    name: z.string().min(1, {message: "Name required"}),
    email: z.string().min(1, {message: "Email required"}).email("This is not valid email"),
    contact: z.string().min(10, {message: "Contact number must contain 10 digits"}).max(10, {message: "Contact number must contain 10 digits"}),
    password: z.string().min(8, 'Password must contain at least 8 character(s)'),
    confirm_password:z.string().min(8)   
}).refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm-password"]
})

const SignInForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            contact: "",
            password: "",
            confirm_password: ""
          },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        try {
            const response = await axios.post("/api/users/signup", values);
            console.log("signup success", response.data);
            toast.success("Success");
            router.push("/");
        } catch (error: any) {
            console.log("signup failed", error.message);
            toast.error(error.message);
        }
    }

  return (
    <Card className='w-96'>
        <CardHeader>
            <CardTitle className='text-center'>Sign up</CardTitle>
            <CardDescription className='text-center'>Enter details to create account</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter name" {...field}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="mail@example.com" {...field} type='email'/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Contact no.</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter contact no." {...field}/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your password" {...field} type='password'/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter password again" {...field} type='password'/>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className='mt-3 w-full'>Sign up</Button>
            </form>
            <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                or
            </div>
            <p className='text-center'>
                    Already have an account? <Link className='text-blue-500 hover:text-blue-700' href="/login">Sign in</Link>
            </p>
        </Form>
        </CardContent>
    </Card>
  )
}

export default SignInForm