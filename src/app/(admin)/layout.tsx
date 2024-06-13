import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (session) redirect("/");
  return <>{children}</>;
}
