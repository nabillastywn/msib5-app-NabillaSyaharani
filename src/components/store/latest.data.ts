import { SLatest } from "./landing.store";
import { ref } from "vue";

function createLatestItem(fileName: string) {
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

export const Latests = ref<SLatest[]>([
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
  createLatestItem("bottle"),
]);
