'use client';

import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '@/lib/firebase/auth';
const SignInButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("User signed in:", user);

      router.push('/chat');
    } catch (err) {
      console.error("Google Sign-in failed:", err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 rounded bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition text-white font-semibold w-full shadow-lg"
    >
      Continue with Google
    </button>
  );
};

export default SignInButton;
