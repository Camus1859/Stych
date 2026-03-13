"use client";

import { StytchProvider } from "@stytch/nextjs";
import stytch from "@/lib/stytch";

export default function StytchProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StytchProvider stytch={stytch}>{children}</StytchProvider>;
}
