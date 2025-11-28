import { useAppDispatch } from "@/store/hooks";
import Image from "next/image";

export default function Home() {

  const dispatch = useAppDispatch();
  

  return (
    <div className="mx-10 font-bold flex">
      <h1>Dashboard</h1>
    </div>
  );
}
