import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "../components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Classes</h1>
      <section className="home-section">
        <CompanionCard id="123" name="Test test" topic="test test1" subject="science" duration={60} color="#ffda6e"/>
        <CompanionCard id="456" name="Test test" topic="test test2" subject="science" duration={40} color="#e5d0ff"/>
        <CompanionCard id="789" name="Test test" topic="test test3" subject="science" duration={30} color="#BDE7FF"/>
      </section>

      <section className="home-section">
        <CompanionsList 
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
