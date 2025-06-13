import { isActress } from "./type.ts";
import type { Actress } from "./type.ts";

async function getActress(id: number): Promise<Actress | null> {
  try {
    const res = await fetch(`http://localhost:5000/actresses/${id}`);
    const dati: unknown = await res.json();
    if (!isActress(dati)) {
      throw new Error(`Formato dati sbagliato`);
    }
    return dati;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`errore con il recupero dell'attore con id ${id}`, err);
    } else {
      console.error(`errore sconosciuto`, err);
    }
    return null;
  }
}

async function getAllActress(): Promise<Actress[]> {
  try {
    const res = await fetch(`http://localhost:5000/actresses`);
    const dati: unknown = await res.json();
    if (!Array.isArray(dati)) throw new Error(`formato dei dati sbagliato`);
    const filterData = dati.filter((curElem) => isActress(curElem));
    return filterData;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`errore con il recupero degli attori`, err);
    } else {
      console.error(`errore sconosciuto`, err);
    }
    return [];
  }
}

async function getActresses(ids: number[]): Promise<(Actress | null)[]> {
  try {
    const arrayPromise = ids.map((curElem) => getActress(curElem));
    const data = await Promise.all(arrayPromise);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`errore con il recupero degli attori`, err);
    } else {
      console.error(`errore sconosciuto`, err);
    }
    return [];
  }
}
