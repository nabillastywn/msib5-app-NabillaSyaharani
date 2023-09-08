import { SYou } from "./landing.store";
import { ref } from "vue";

function createYouItem(fileName: string) {
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

export const Yours = ref<SYou[]>([
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
  createYouItem("bottle"),
]);
