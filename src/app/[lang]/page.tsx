import Modals from "../components/Modals/modules/Modals";
import Footer from "../components/Walkthrough/modules/Footer";
import Walkthrough from "../components/Walkthrough/modules/Walkthrough";
import { getDictionary } from "./dictionaries";
import { tParams } from "./layout";

export default async function IndexPage({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return (
    <div
      dir={lang !== "ar" && lang !== "fa" ? "ltr" : "rtl"}
      className="relative w-full h-fit flex flex-col"
    >
      <Walkthrough dict={dict} lang={lang} />
      <Footer dict={dict} lang={lang} />
      <Modals dict={dict} lang={lang} />
    </div>
  );
}
