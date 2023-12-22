import Image from "next/image";
import BackgroundImage from "../../public/login_background.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="Login Background"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <h3 className="absolute top-4 left-4 md:left-10 text-4xl font-medium">
        FlixTube
      </h3>
      {children}
    </div>
  );
}
