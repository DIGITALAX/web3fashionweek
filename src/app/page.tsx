import { getDictionary } from "./[lang]/dictionaries";
import Walkthrough from "./components/Walkthrough/modules/Walkthrough";
import Footer from "./components/Walkthrough/modules/Footer";
import Modals from "./components/Modals/modules/Modals";

export default async function IndexPage() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <div dir="ltr" className="relative w-full h-fit flex flex-col">
      <Walkthrough lang="en" dict={dict} />
      <Footer dict={dict} lang="en" />
      <Modals dict={dict} lang="en"  />
    </div>
  );
}
