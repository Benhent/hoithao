import { zodResolver } from "@hookform/resolvers/zod"
import {Link} from "react-router-dom"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation";
import {Button} from "@/components/ui/button";
import { z } from "zod";
import Loader from "@/components/shared/Loader";
import { createUserAcount } from "@/lib/appwrite/api";

const SignupForm = () => {
  const isLoading = false;
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAcount(values)

    console.log(newUser)
    
    // mở cửa sổ đăng nhập
    window.open('/sign-in')
  }
  return (
    <Form {...form}>
    <div className="sm:w-420 flex-center flex-col">
      <img src="/assets/images/logo.png" alt="logo" />
      <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create new account</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
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
                <Input type="email" className="shad-input" {...field} />
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
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
        />
        <Button type="submit" className="shad-button_primary">
          {isLoading ? (
            <div className="flex-center gap-2">
              <Loader/> Loading...
            </div>
          ) : "Sign Up"}
        </Button>
        <p className="text-small-regular text-light-3 text-center mt-2">
          Already have an account?
          <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Log in</Link>
        </p>
      </form>
    </div>
  </Form>
  )
}

export default SignupForm