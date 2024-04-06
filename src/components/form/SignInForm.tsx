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
import { toast } from 'sonner'


const formSchema = z.object({
    email: z.string().min(1, {message: "Email required"}).email("This is not valid email"),
    password: z.string().min(8, 'Password must contain at least 8 character(s)')    
})

const SignInForm = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/users/login", values);
            toast.success("Login successful")
            router.push('/');
        } catch (error: any) {
            toast.error("Wrong credentials")
        }
    }

  return (
    <Card className='w-96'>
        <CardHeader>
            <CardTitle className='text-center'>Sign in</CardTitle>
            <CardDescription className='text-center'>Enter details to sign in</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="mail@example.com" {...field} type='email'/>
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
                <Button type="submit" className='mt-3 w-full'>Sign in</Button>
            </form>
            <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                or
            </div>
            <p className='text-center'>
                    Don&apos;t have an account? <Link className='text-blue-500 hover:text-blue-700' href="/signup">Sign up</Link>
            </p>
        </Form>
        </CardContent>
    </Card>
  )
}

export default SignInForm