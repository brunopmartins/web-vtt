import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Compendium() {
  const router = useRouter();
  useEffect(() => {
    router.push("/compendium/skills");
  }, []);
  return null;
}
