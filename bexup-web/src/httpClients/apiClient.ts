import { BrandInterface, ModelInterface } from "@/types";
import axios from "axios";

const apiUrl = "http://localhost:3333"; //TODO: Implementar variavel de ambiente

export async function getBrands() {
  const response = await axios.get<BrandInterface[]>(
    `${apiUrl}/brands/list-all`
  );
  return response.data;
}

export async function searchModels(param: string | number) {
  const response = await axios.get<ModelInterface[]>(
    `${apiUrl}/models/list/${param}`
  );
  return response.data;
}
