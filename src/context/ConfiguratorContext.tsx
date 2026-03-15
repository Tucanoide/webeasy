"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import opcionesData from '@/data/opciones.json';

interface PaqueteBase {
  id: string;
  titulo: string;
  paginas: number;
  precio: number;
  items: string[];
  interacciones: number;
}

interface Adicional {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  popular?: boolean;
  recurrente?: boolean;
  periodo?: string;
}

interface ConfiguratorContextType {
  paquetesBase: PaqueteBase[];
  adicionales: Adicional[];
  selectedBaseId: string | null;
  selectedAdicionalIds: string[];
  setSelectedBaseId: (id: string | null) => void;
  toggleAdicional: (id: string) => void;
  totalOneTime: number;
  totalAnual: number;
  selectedBase: PaqueteBase | null;
  selectedAdicionales: Adicional[];
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(undefined);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [selectedBaseId, setSelectedBaseId] = useState<string | null>(null);
  const [selectedAdicionalIds, setSelectedAdicionalIds] = useState<string[]>([]);

  const { paquetesBase, adicionales } = opcionesData as { 
    paquetesBase: PaqueteBase[], 
    adicionales: Adicional[] 
  };

  const selectedBase = useMemo(() => 
    paquetesBase.find(p => p.id === selectedBaseId) || null
  , [selectedBaseId, paquetesBase]);

  const selectedAdicionales = useMemo(() => 
    adicionales.filter(a => selectedAdicionalIds.includes(a.id))
  , [selectedAdicionalIds, adicionales]);

  const toggleAdicional = (id: string) => {
    setSelectedAdicionalIds(prev => 
      prev.includes(id) ? prev.filter(aid => aid !== id) : [...prev, id]
    );
  };

  const totalOneTime = useMemo(() => {
    const basePrice = selectedBase?.precio || 0;
    const additionalPrice = selectedAdicionales
      .filter(a => !a.recurrente)
      .reduce((sum, a) => sum + a.precio, 0);
    return basePrice + additionalPrice;
  }, [selectedBase, selectedAdicionales]);

  const totalAnual = useMemo(() => {
    return selectedAdicionales
      .filter(a => a.recurrente)
      .reduce((sum, a) => sum + a.precio, 0);
  }, [selectedAdicionales]);

  return (
    <ConfiguratorContext.Provider value={{
      paquetesBase,
      adicionales,
      selectedBaseId,
      selectedAdicionalIds,
      setSelectedBaseId,
      toggleAdicional,
      totalOneTime,
      totalAnual,
      selectedBase,
      selectedAdicionales
    }}>
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const context = useContext(ConfiguratorContext);
  if (context === undefined) {
    throw new Error('useConfigurator must be used within a ConfiguratorProvider');
  }
  return context;
}
