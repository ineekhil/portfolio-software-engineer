import { UnderConstructionScreen } from "@/components/sections/under-construction-screen";
import { Villain } from "@/components/sections/villain";
import { HOME_UNDER_CONSTRUCTION } from "@/lib/constants";

export default function HomePage() {
  return HOME_UNDER_CONSTRUCTION ? <UnderConstructionScreen /> : <Villain />;
}
