import Entries from "../entries/Entries";
import TabBar from "../tabbar/TabBar";

export default function EntriesSection() {
  return (
    <section>
      <TabBar />
      <Entries />
    </section>
  );
}
