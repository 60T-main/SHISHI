"use client";
import { PageProvider } from "@/hooks/usePageHooks.jsx";

export default function PageProviderClient({ children }) {
  return <PageProvider>{children}</PageProvider>;
}
