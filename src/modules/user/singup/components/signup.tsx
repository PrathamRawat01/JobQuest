import {hash} from 'bcryptjs';
import { User } from "@/models/userModel";

export default function SignUp() {

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // Your sign-up logic here
    };

    return (
        <form action={async(formData:FormData)=>{
            "use server";

            const name = formData.get("name")as string | undefined;
            const email = formData.get("email") as string | undefined;
            const password = formData.get("password") as string | undefined;
            const confirmpassword = formData.get("confirmpassword") as string | undefined;

            if (!email || !password || !name || !confirmpassword)
                throw new Error("Please Provide ALL Fields");

            //conect to db
            const user = await User.findOne({ email });
            if(user) throw new Error ("User Already Exists");

            const hashedPassword = await hash(password , 10);

            //create new user now 
            User.create({
                name,
                email,
                password:hashedPassword,
                confirmpassword,
            })

        }} 
        className="flex flex-col space-y-4">
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

            {/* Name Input */}
            <input
                type="text"
                placeholder="Name"
                name="name"
                className="border p-2 rounded"
            />

            {/* Email Input */}
            <input
                name="email"
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
            />

            {/* Password Input */}
            <input
                name="password"
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
            />

            {/* Confirm Password Input */}
            <input
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                className="border p-2 rounded"
            />

            {/* Submit Button */}
            <button type="submit" className="bg-green-600 text-white p-2 rounded">
                Sign Up
            </button>
        </form>
    );
}
