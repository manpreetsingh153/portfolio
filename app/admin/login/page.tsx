
import { LoginForm } from "@/components/login-form";

export default function SignInPage() {

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.currentTarget as HTMLFormElement);
    //     const email = formData.get("email") as string;
    //     const password = formData.get("password") as string;

    //     const res = await signIn("credentials", {
    //         email,
    //         password,
    //         redirect: false
    //     });

    //     if (res?.error) {
    //         setError("Invalid email or password");
    //     } else {
    //         router.push("/");
    //     }
    // };

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    );
}

// <form onSubmit={handleSubmit}>
//   <h2>Sign In</h2>
//   {error && <p style={{ color: "red" }}>{error}</p>}
//   <input type="text" name="email" placeholder="Email" required />
//   <input type="password" name="password" placeholder="Password" required />
//   <button type="submit">Sign in</button>
// </form>