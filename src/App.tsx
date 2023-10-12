import { MainMap } from "./components/MainMap";
// import { Kisska_ip } from './components/Kisska_ip';


export default function App() {
  return (
    <section className="main">
      {/* <Kisska_ip /> */}
      <MainMap isDarkTheme={false} />
    </section>
  );
}
