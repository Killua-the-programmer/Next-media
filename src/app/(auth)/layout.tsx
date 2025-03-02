import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { user } = await validateRequest();
  if (user) redirect("/");
  return <>{children}</>;
};

export default Layout;
