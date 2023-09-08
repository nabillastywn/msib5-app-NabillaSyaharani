import { SFlash } from "./landing.store";
import { ref } from "vue";

function createFlashItem(fileName: string) {
  return {
    fileName,
    label: "Label",
    title: "UX review presentations",
    price: "Rp36.000",
    size: "450ML",
    pricedisc: "Rp40.000",
    disc: "-10%",
  };
}

export const flashes = ref<SFlash[]>([
  createFlashItem("bottle"),
  createFlashItem("shoes"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
  createFlashItem("bottle"),
]);
