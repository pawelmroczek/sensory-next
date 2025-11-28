"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector, selectInitialLoading } from "@/store/hooks";
import { loadInitialData } from "@/lib/loadInitialData";

export function DataLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const initialLoading = useAppSelector(selectInitialLoading);
  const hasLoaded = useRef(false);

  useEffect(() => {
    // Ładuj dane tylko raz - jeśli już są załadowane, nie ładuj ponownie
    if (!hasLoaded.current && initialLoading) {
      loadInitialData(dispatch);
      hasLoaded.current = true;
    }
  }, [dispatch, initialLoading]);

  if (initialLoading) {
    return <div className="w-full h-screen flex items-center justify-center">Ładowanie danych sensorów...</div>;
  }

  return <>{children}</>;
}
